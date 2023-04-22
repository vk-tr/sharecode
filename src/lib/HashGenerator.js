export class HashGenerator {
    constructor() { }

    #getSHA256Hash = async (input) => {
        const textAsBuffer = new TextEncoder().encode(input);
        const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hash = hashArray
            .map((item) => item.toString(16).padStart(2, "0"))
            .join("");
        return hash;
    };

    hash = async () => {
        let date = new Date().toString();

        let seed = Math.floor(Math.random() * 10).toString();

        let hash = await this.#getSHA256Hash(date + seed);

        return hash;
    }
}

