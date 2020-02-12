import axios from 'axios';

export default class ServiceStart {
    
  static myInstance = null;

  /**
   * @returns {ServiceStart}
   */
  static getInstance() {
    if (ServiceStart.myInstance == null) {
      ServiceStart.myInstance = new ServiceStart();
    }

    return this.myInstance;
  }

  login = async (loginData) => {
    // SEND PIN TO THE PHONE NUMBER
    try {
      let res = await axios.post("Phone", loginData);
      console.log("login reply is ", res);
      return res;
    } catch (e) {
      console.log('error is ', e)
      throw e.response.data['detail'];
    }
  };
}
