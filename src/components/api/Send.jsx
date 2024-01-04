import Swal from "sweetalert2";
const Send = async ({ name, email, subject, message, spanish }) => {

    const messageData = {
        name,
        email,
        subject,
        message,
        spanish
    }
    try {
        const response = await fetch('url', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(messageData),
        })

        const data = await response.json();
        if (response.ok) {
            Swal.fire({
                title: "",
                text: data.message,
                icon: "success",
                showConfirmButton: false,
                timer: 1500
              })
            console.log(data);
        } else {
            throw new Error(data.message);
        }

    } catch (error) {
        throw new Error(error);
    }
}

export default Send;