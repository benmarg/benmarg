import { useEffect, useState, type RefObject } from 'react';

export function IntersectObserv(ele:  RefObject<HTMLDivElement>) {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ref = ele.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      })
    }, { threshold: 1, rootMargin: "0px 0px 0px 0px" })

    if (ref) {
      observer.observe(ref)
    }

    return () => {
      if (ref) {
        observer.unobserve(ref)
      }
    }
  }, [])

  const fadeCSS = `after:content-[""] relative after:absolute after:inset-0 after:bg-offGrey after:transition ${visible ? "after:animate-[redacted_1s_cubic-bezier(0.19,1,0.22,1)_forwards]":"after:w-0"}`
  const innerFadeCSS = `opacity-0 ${visible ? "animate-[fade_0s_ease_forwards_500ms]" : ""}`

  return { fadeCSS, innerFadeCSS, visible }

}