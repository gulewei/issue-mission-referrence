import { inferOptions } from "./inferOptions";

inferOptions({
    data() {
        return {
            time: 0, // click `find all references` here output 2 results but expect 3.
        };
    },
    created() {
        this.time = 123;
        console.log(this.time);
    },
});
