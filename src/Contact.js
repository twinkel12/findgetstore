import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

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

  return(
    <Wrapper>
      <h2 className="common-heading">contact page</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d524.2518224269621!2d86.25890248016805!3d20.006511650374602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1a276c6126295f%3A0xf83754e0ea67a49d!2sHara%20Nivas!5e0!3m2!1sen!2sin!4v1718713536158!5m2!1sen!2sin" 
      width="100%"
       height="400" 
       style={{border:0}} 
       allowFullScreen="" 
       loading="lazy" 
       referrerPolicy="no-referrer-when-downgrade">
       </iframe>

       <div className="container">
        <div className="contact-form">
          <form action="" method="POST" className="contact-inputs">
            <input type="text" placeholder="username" name="username" required autoComplete="off" />

            <input type="email" name="Email" placeholder="Sample@gmail.com" required autoComplete="off" />

            <textarea name="Message" cols="30" rows="10" required autoComplete="off" placeholder="Enter your message"></textarea>

            <input type="submit" value="Send" />
          </form>
        </div>
       </div>
    </Wrapper>
  );
};

export default Contact;
