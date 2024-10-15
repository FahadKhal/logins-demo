Features
User Authentication: The login form allows users to authenticate using their email or username and password. It validates inputs and checks for errors before making an API call to log in the user.
Password Visibility Toggle: Users can easily toggle the visibility of their password while typing. The password field displays either plain text or masked characters (••••••••), depending on whether the user chooses to show or hide the password.
Icons Used: The form includes an eye icon (FaEye) for showing the password and an eye-slash icon (FaEyeSlash) for hiding it, both from react-icons.
Error Handling: If the user does not fill in both fields or the password is less than 6 characters long, an error message is displayed. The form also shows an error message if the login attempt fails (e.g., invalid credentials).
Loading State: A loading spinner or disabled state is shown while the login request is processing to prevent multiple submissions.
Persistent Login (Session Management): The authentication state is persisted across page reloads. If the user is already logged in, refreshing the page will not log them out, and they will remain authenticated until they explicitly log out.
Redirection Logic: If a logged-in user navigates to the /login route, they will be automatically redirected to the home page (/home). This prevents users from accessing the login page when they are already authenticated.
Responsive Layout: The form is fully responsive, adjusting gracefully to different screen sizes using Tailwind CSS.
