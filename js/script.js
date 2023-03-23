const { createApp } = Vue

  createApp({
    data() {
      return {
        EmailsArray: [],
      }
    },

    created() {
       this.
    },


    methods: {

        GenerateEmails(length){
            for (let i = 0; i < length; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res) => {
                    let RandomEmails = res.data.response;
                    this.EmailsArray.push(RandomEmails);
                })
                
            }
        }

    },

    mounted() {
        
    },

  }).mount('#app')