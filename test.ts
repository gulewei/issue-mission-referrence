import { inferOptions } from './inferOptions'

inferOptions({
    data(){
        return {
            time: 0 // `find all references` here will found all three results.
        }
    },
    created(){
        this.time = 123;
        console.log(this.time);
    }
});