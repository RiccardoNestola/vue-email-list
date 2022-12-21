const { createApp } = Vue

    createApp({
        data() {
            return {

            randomMail: [],
            
        }
    },
        methods: {

        getRandomMail(){
            for (let index = 0; index < 10; index++) {

                axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
                .then( (response) => {

                this.randomMail.push(response.data.response);
                console.log(this.randomMail);
                });
            }


            }
            

            
        },


        created() {
            this.getRandomMail()
        }


    }).mount('#app')






    

    