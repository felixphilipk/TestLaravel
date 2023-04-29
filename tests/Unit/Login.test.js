import { mount } from '@vue/test-utils';
import Login from "../../../TestLaravel/resources/js/pages/Login.vue";

describe('Login', () => {
  it('handles login submission', async () => {
    const wrapper = mount(Login);

    // Fill out the form fields
    // User should be reigetered 
    const emailInput = wrapper.find('#username');
    const passwordInput = wrapper.find('#password');
    await emailInput.setValue('test@example.com');
    await passwordInput.setValue('password');

    // Submit the login form
    const submitButton = wrapper.find('button[type="submit"]');
    await submitButton.trigger('click');

    // Wait for async actions to complete
    await wrapper.vm.$nextTick();

     //Expect the router to have been redirected to /home
    expect(wrapper.vm.$router.currentRoute.value.path).toBe('/home');
  });
});
