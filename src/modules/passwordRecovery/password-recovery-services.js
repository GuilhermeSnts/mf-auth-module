const services = {
  SendEmailForRecovery: (payload) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!payload.username && !payload.password) {
          reject('usuário ou senha incorretos')
        } else {
          resolve({ token: "a7t2ge8ta27e" });
        }
      }, 3000);
    });
  },
};
export default services;
