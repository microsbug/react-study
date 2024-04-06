import React from 'react';
import {useHistory, useLocation, useParams, useRouteMatch} from "react-router-dom";

const STU_DATA = [
    {
        id:1,
        name:'孙悟空'
    },
    {
        id:2,
        name:'猪八戒'
    },
    {
        id:3,
        name:'沙和尚'
    },
    {
        id:4,
        name:'唐僧'
    },
];

const Student = (props) => {

    // console.log(props);
    // const stu = STU_DATA.find(item => item.id === +props.match.params.id);

    /*
    *   除了可以通过props获取三个对象外，也可以通过钩子函数来获取
    * */
    const match = useRouteMatch();
    const location = useLocation();
    const history = useHistory();
    const {id} = useParams();

    // const stu = STU_DATA.find(item => item.id === 1);
    const stu = STU_DATA.find(item => item.id === +id);


    return (
        <div>
            {stu.id} --- {stu.name}
        </div>
    );
};

export default Student;
