
 export const validateEmail = (mail) => {
    var re = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;

   return re.test(mail)

  }