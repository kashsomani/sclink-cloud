<script>
      import {addContactInfor} from './firebase';
</script>

<div
    class="  columns-1 container flex items-center justify-center h-auto m-12 p-40  "
>
    <div class="columns-1 container flex p-6 justify-center mx-12 bg-cyan-400">
        <div class="alert">Your message has been sent successfully!</div>
        <form id="ContactForm">
            <div class="flex flex-col">
                <label for="name">Name</label>
                <input type="text" required />
            </div>
            <div class="flex flex-col">
                <label for="name">Email</label>
                <input type="text"required />
            </div>
            <div class="flex flex-col">
                <label for="name">Subject</label>
                <input type="text" id="subject" name="subject" />
            </div>
            <div class="flex flex-col">
                <label for="name">Message</label>
                <textarea
                    maxLength="500"
                    rows="4"
                    type="text"
                    id="message"
                    name="message"
                    class="text-black form-input w-80 cursor-pointer rounded-md"
                    required
                />
            </div>
            <button on:click={addContactInfor}
                type="submit"
                class="flex justify-center   text- font-bold py-2 px-4 rounded focus:ring focus:ring-blue-300 hover:bg-blue-500"
                >Submit</button
            >
        </form>
    </div>
</div>

<style lang="postcss" scoped>
    .container {
        background-color: var(--dark-background);
    }

    input {
        @apply rounded-md text-black;
    }

    button {
        background-color: var(--dark-color);
        color: var(--secondary-color);
    }

    .alert {
        text-align: center;
        background-color: aquamarine;
        @apply mb-5 p-10 text-black;
        display: none;
    }
</style>
