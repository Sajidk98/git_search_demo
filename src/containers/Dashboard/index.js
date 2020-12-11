import { Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { initGetUser } from "../../actions/users"; this is for thunk
import type from "../../actions/constant";
import ActionCard from "../../components/ActionCard";
const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  useEffect(() => {
    dispatch({ type: type.GET_USER_REQUEST });
  }, []);
  console.log(data, "showing data");

  return (
    <div>
      <ActionCard>
        <Typography>Hello............</Typography>
      </ActionCard>
      <ActionCard>
        <Typography>Hello............</Typography>
      </ActionCard>
    </div>
  );
};

export default Dashboard;
