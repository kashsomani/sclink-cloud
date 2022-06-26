<script>
    import App from "../../../App.svelte";

    import { addContactInformation } from "../../../firebase.js";

    let name = "";
    let email = "";
    let subject = "";
    let message = "";
</script>

<div
    class=" grid grid-cols-1 place-items-center p-20 mx-40 mt-20 mb-6" id="big-container"
>
    <div class="grid grid-cols-1  text-4xl min-w-full text-center">CONTACT US</div>

    <div class="grid grid-cols-1 place-items-center  min-w-full  mx-2 px-24">
        <form class="min-w-full px-8 py-6">
            <div class="flex flex-col">
                <label for="name">Name</label>
                <input bind:value={name} type="text" required />
            </div>
            <div class="flex flex-col">
                <label for="name">Email</label>
                <input bind:value={email} type="text" required />
            </div>
            <div class="flex flex-col">
                <label for="name">Subject</label>
                <input
                    bind:value={subject}
                    type="text"
                    id="subject"
                    name="subject"
                />
            </div>
            <div class="flex flex-col">
                <label for="name">Message</label>
                <textarea
                    bind:value={message}
                    maxLength="500"
                    rows="4"
                    type="text"
                    class="text-black form-input cursor-pointer rounded-md"
                    required
                />
            </div>
            <button
                on:click={() =>
                    addContactInformation({ name, email, subject, message })}
                type="submit"
                class="flex justify-center   text- font-bold py-2 px-4 rounded focus:ring focus:ring-blue-300 hover:bg-blue-500"
                >Submit</button
            >
        </form>
    </div>
</div>

<style lang="postcss" scoped>
    form {
        background-color: var(--dark-background);
    }

    input {
        @apply rounded-md text-black;
    }

    button {
        background-color: var(--dark-color);
        color: var(--secondary-color);
    }
    #big-container{
        background-color: var(--dark-background);
    }
</style>
