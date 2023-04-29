<?php

namespace Tests\Unit;


use Illuminate\Foundation\Testing\Concerns\InteractsWithContainer;
use Illuminate\Foundation\Testing\Concerns\InteractsWithDatabase;
use Illuminate\Http\Request;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Routing\Redirector;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use App\Http\Controllers\AuthController;
use Illuminate\Contracts\Console\Kernel;
use Faker\Factory as Faker;

class AuthControllerTest extends TestCase
{
    use DatabaseTransactions, InteractsWithDatabase, InteractsWithContainer;
    public function createApplication()
{
    $app = require __DIR__.'/../../bootstrap/app.php';
    $app->make(Kernel::class)->bootstrap();
    $app->bind(ResponseFactory::class, \Illuminate\Routing\ResponseFactory::class);
    return $app;
}

    public function testRegister()
    {
        $faker = Faker::create();
        $name = $faker->name;
        $email = $faker->unique()->safeEmail;
        $password = 'password123';
        // Create a mock request with valid data
        $requestData = [
            'name' => 'jahon1',
            'email' => 'jahon1@i.com',
            'password' => 'pass1232'
        ];
        $request = new Request($requestData);

        // Call the register method on the controller
        $controller = new AuthController(
            app(ResponseFactory::class),
            new Redirector(app('url'))
        );
        $response = $controller->register($request);

        // Assert that the response has the correct structure and status code
        $this->assertEquals(200, $response->getStatusCode());
        $this->assertArrayHasKey('status', $response->getData(true));
        $this->assertArrayHasKey('message', $response->getData(true));
        $this->assertArrayHasKey('token', $response->getData(true));

        // Assert that the new user was actually created in the database
        $this->assertDatabaseHas('users', [
            'name' => $requestData['name'],
            'email' => $requestData['email']
        ]);
    }
}

