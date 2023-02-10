const email = (email: string) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  if (regex.test(email) === false) {
    return false;
  }

  return true;
};

const Validation = {email};

export default Validation;
