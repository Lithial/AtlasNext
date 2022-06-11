import {useEffect, useState} from "react";

const UseContainerDimensions = (ref) => {
    const [dimensions, setDimensions] = useState({
        height: ref?.current?.clientHeight,
        width : ref?.current?.clientWidth,
    });

    useEffect(() => {
        const refCopy = ref.current || null;
        const handleResize = () => {
            setDimensions({
                height: refCopy?.clientHeight,
                width: refCopy?.clientWidth
            })
        }
        refCopy?.addEventListener('resize', handleResize);
        return () => {
            refCopy?.removeEventListener('resize', handleResize);
        }
    },[])

    return {
        dimensions
    }
};

export default UseContainerDimensions;
