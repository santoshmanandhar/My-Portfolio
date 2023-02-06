import AWS from 'aws-sdk';
import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      /**
       * This is a good starting point to wire up your form submission logic
       * */
      console.log('Data to send: ', data);
    },
    [data],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  const sendEmail = function () {
    // const [nameState, setName] = useState('');
    // const [emailState, setEmail] = useState('');
    // const [phoneState, setPhone] = useState('');
    // const [messageTitleState, setMessageTitle] = useState('');
    // const [messageState, setMessage] = useState('');
    if(data.name=="" || data.email=="" || data.message==""){
      console.log("Form is empty");
      return;

    }
    console.log('send email', data)
    AWS.config.update({
      region: 'us-east-1',
      accessKeyId: 'AKIAUS6FFSPXGS4HEH55',
      secretAccessKey: '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'
    })
    const params = {
      Destination: {
        ToAddresses: ['santosh.manandhar@miu.edu']
      },
      Message: {
        Body: {
          Text: {
            Data: "This is a test email body!"
          }
        },
        Subject: {
          Data: 'Test Subject'
        }
      },
      Source: 'santosh.manandhar1@gmail.com',
    };
    const ses = new AWS.SES({apiVersion: '2010-12-01'});
    
    console.log('send email');
    ses.sendEmail(params).promise().then(res => {
      console.log('The email is sent: ', res);
    }).catch(err => {
      console.error('Error while sending email: ', err);
    })
  }
  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
       <input className={inputClasses} name="mobile" onChange={onChange} placeholder="Mobile Number" required type="text" />
       <input className={inputClasses} name="messageTitle" onChange={onChange} placeholder="Message Title" required type="text" />

      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        // onClick={sendEmail} 
        type="submit" >
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
