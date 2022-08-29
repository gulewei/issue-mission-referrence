import { inferOptions } from './inferOptions'

inferOptions({
    data(){
        return {
            time: 0 // click `find all references` here will found 2 results, but actually there is 3 and line 10 is the missing one.
        }
    },
    created(){
        this.time = 123;
        console.log(this.time);
    }
});