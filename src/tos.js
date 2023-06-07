import Swal from 'sweetalert2';
import showChat from './chat';

export default function showTos () {
    Swal.fire({
        title: 'Term of service',
        html: `
          <div>
          Welcome! Chat is a platform that brings people together over shared experiences and gives everyone a place to belong. We’re happy you’re here.
      These terms set forth our legal obligations to each other. They apply to your use of our services.
      We also have a Privacy Policy, Community Guidelines, and these other policies that apply to your use of our services and are incorporated into these terms. You should read these policies—we’ve worked hard to make them simple and clear, and they contain important information about your use of our services. If you use our API, chat Developer Terms of Service and Developer Policy apply to that use. 
      
      <h2> Age requirements and responsibility of parents and legal guardians </h2>
      By accessing our services, you confirm that you’re at least 13 years old and meet the minimum age required by the laws in your country. We maintain a list of minimum ages around the world as a resource for you, but we aren’t able to guarantee that it is always accurate. If you are old enough to access our services in your country, but not old enough to have authority to consent to our terms, your parent or legal guardian must agree to our terms on your behalf. Please ask your parent or legal guardian to read these terms with you. If you’re a parent or legal guardian, and you allow your child (who meets the minimum age for your country) to use the services, then these terms also apply to you and you’re responsible for your child’s activity on the services.
      We respect the intellectual property of others and expect our users to do the same. See our Copyright & IP Policy for information on how to file a copyright complaint.
      
      <h2> Restrictions on your use of our services </h2>
      When using our services, you must comply with these terms and all applicable laws, rules, and regulations, and you must only use the services for authorized and acceptable purposes. You must also adhere to our Community Guidelines and other policies, which contain more detailed rules about your content and behavior. Fundamentally, do not do, try to do, or encourage or help others to do any of the following: <br>
      •	Don’t use the services to do harm to yourself or others. Among other things, this includes trying to gain access to another user’s account or any non-public portions of the services, infringing anyone else’s intellectual property rights or any other proprietary rights, exploiting, harassing, bullying, spamming, auto-messaging, or auto-dialing people through our services. <br>
      •	Don’t use the services to do harm to chat. Among other things, this includes trying to gain access to or attacking our systems, scraping us, transmitting viruses or other malicious code to our services, abusing or defrauding us or our payment systems, copying our product or using our intellectual property without permission, and misusing our reporting or customer service mechanisms.<br>
      •	Don’t use the services to do anything else that’s illegal. This includes using the services to plan or commit any crime or do anything else that is illegal.
      We encourage you to report content or conduct that you believe violates these restrictions. 
      
      <h2>Contacting each other </h2>
      If you have any questions about these terms, please contact us at noxyyk@gmail.com . We may send you electronic communications related to our services. Where required, we’ll get your consent before sending you direct marketing, and we’ll make it easy for you to opt out.
      
          </div>
        `,
        grow: 'fullscreen',
        confirmButtonText: 'Agree',
        cancelButtonText: 'Cancel',
        showCancelButton: true,
        showCloseButton: true,
        input: 'checkbox',
        inputValue: 0,
        inputPlaceholder: 'I agree with the terms and conditions',
        inputValidator: (result) => {
          return !result && 'You need to agree with T&C';
        },
      })
        .then((result) => {
          if (result.value) {
            showChat();
          }
        });

}
