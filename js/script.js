const { createApp } = Vue

    createApp({
        data() {
            return {

            randomMail: null,
            
        }
    },
        methods: {

        getRandomMail(){
                
                axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
                .then(function (response) {
                this.randomMail = response.data.response
                
                console.log(this.randomMail);

                })
                .catch(function (error) {
                
                console.log(error);
                })
                .then(function () {
                
                });

            }
            
        },


        created() {
            this.getRandomMail()
        }


    }).mount('#app')






    

    