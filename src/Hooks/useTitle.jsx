import { useEffect } from "react";

const useTitle = title => {

    useEffect(() => {

        document.title = `Action Avenue | ${title}`;

    }, [title])

};

export default useTitle;