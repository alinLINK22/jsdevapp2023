const {createApp} = Vue;

let vm = createApp({
    data(){
        return{
            fname:"Ionut",
            lname:"Lenghel",
            address:"Orade",
            message:"Imi place sa mananc"
        }
    },
    methods:{
        myName: function(){
            return `Eu ma numesc ${this.fname} ${this.lname} si sunt din ${this.address}`;
        }
    }
}).mount('#app');