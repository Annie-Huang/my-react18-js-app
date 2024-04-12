import { useEffect, useRef } from 'react';

function useOnClickOutside(onClose) {
  const clickOutsideRef = useRef(null);

  useEffect(() => {
    const handleClickEvent = (e) => {
      // console.log('aaaaa=', clickOutsideRef.current);

      if (clickOutsideRef.current) {
        // When you click on the Login button,
        //    e.target.contains(clickOutsideRef.current) === false; (because <Login>.contains(<form> === false)
        // When you have the modal open, and click on the form, e.target and clickOutsideRef.current both point to <form>
        //    so e.target.contains(clickOutsideRef.current) === true; (because <form>.contains(<form>) === true;)
        //    Therefore we need to add additional check for
        //    e.target !== clickOutsideRef.current (because <form> === <form>)
        // When you have the modal open, and click outside of the form, then
        //    e.target.contains(clickOutsideRef.current) === true; (because .LoginModal-overlay-container'sEl.contains(<form>) === true)
        //    But e.target !== clickOutsideRef.current (because .LoginModal-overlay-container'sEl !== <form>, .LoginModal-overlay-container'sEl is the parent of <form>)
        // when you have the modal open and click onto the input, then
        //    e.target.contains(clickOutsideRef.current) === false; (because <input>.contains(<form> === false, <input> is the children of <form>)

        // console.log('e=', e);
        console.log('e.target=', e.target);
        console.log('clickOutsideRef.current=', clickOutsideRef.current);
        console.log(
          'clickOutsideRef.current.contains(e.target)=',
          clickOutsideRef.current.contains(e.target)
        );
        console.log(
          'e.target.contains(clickOutsideRef.current)=',
          e.target.contains(clickOutsideRef.current)
        );
        console.log('--------------------------------------------------------');

        if (
          e.target.contains(clickOutsideRef.current) &&
          e.target !== clickOutsideRef.current
        ) {
          onClose();
        }
      }
    };

    window.addEventListener('click', handleClickEvent);

    return () => {
      window.removeEventListener('click', handleClickEvent);
    };
  }, []);

  return clickOutsideRef;
}

export default useOnClickOutside;
