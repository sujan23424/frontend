export const validEmail = new RegExp(
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
 );
export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
