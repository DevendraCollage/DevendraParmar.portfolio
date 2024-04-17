import styled from "styled-components"

const Contact = () => {

  const Wrapper = styled.section`
    padding: 5rem 0;
    background-color: ${({ theme }) => theme.colors.bg};

    //? Set the map in the center of the screen
    .cityMap {
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
    }


    h2 {
      font-size: 4rem;
      font-weight: 900;
      white-space: normal;
      display: flex;
      justify-content: center;
      margin-bottom: 3.4rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.heading};
    }

    input, textarea{
      width: 100%;
      max-width: calc(100% - 4.8rem);
      color: ${({ theme }) => theme.colors.black};
      padding: 1.6rem 2.4rem;
      border: 1px solid ${({ theme }) => theme.colors.border};
      /* text-transform: uppercase; */
      box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    }

    input[type="submit"]{
      max-width: 16rem;
      margin-top: 1rem;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.btn};
      color: ${({ theme }) => theme.colors.white};
      padding: 1.4rem 2.2rem;
      border-style: solid;
      border-width: .1rem;
      text-transform: uppercase;
      font-size: 1.8rem;
      cursor: pointer;
    }

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact Us</h2>
      {/* Google Map - For Displaying the Map on the website */}
      <iframe
        className="cityMap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236295.74806764474!2d70.65613164077557!3d22.273403452076042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710049185269!5m2!1sen!2sin"
        width="70%"
        height="320"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xeqdgwnq"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

export default Contact
