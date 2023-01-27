import { Button } from 'react95';

const CustomButton = ({ href, buttonText, ...props }) => {
  //   const [activeLink, setActiveLink] = useState('');

  //   // Use the useEffect hook to update the active link when the URL changes
  //   useEffect(() => {
  //     // Get the current URL
  //     const currentUrl = window.location.href;
  //     // Update the active link state based on the current URL
  //     setActiveLink(currentUrl);
  //   }, []);
  //   console.log(activeLink);
  return (
    <a href={href}>
      <Button {...props}> {buttonText}</Button>
    </a>
  );
};

export default CustomButton;
