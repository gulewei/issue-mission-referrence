export declare function inferOptions<D>(
    options: {
        data: () => D;
        created: () => void;
    } & ThisType<D>
): void;
