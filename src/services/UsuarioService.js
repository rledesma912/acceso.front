import Api from './Api';

export default {
  register () {
    // return "{    mensaje: 'éxito'  })";

    return Api().get("usuarios/combo")
      .then(function(response) {
        console.log('1');
        return response.data;
      })
      .catch(function(err) {
        console.log(err.response);
        return err.response.data;
      })

  },
  login (credentials) {
    return Api().post('login', credentials)
  }
}
