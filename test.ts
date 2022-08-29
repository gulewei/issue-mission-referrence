import { inferOptions } from "./inferOptions";

inferOptions({
    data() {
        return {
            time: 0, // here output 3 results as expected
        };
    },
    created() {
        this.time = 123;
        console.log(this.time);
    },
});
