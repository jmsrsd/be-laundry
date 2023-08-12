import { Button } from "@material-tailwind/react";
import { BiArrowBack } from "react-icons/bi";
import { CgHomeAlt } from "react-icons/cg";
import { useNavigate, useRouteError } from "react-router-dom";

import MainLayout from "../main/MainLayout";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();

  const { status, statusText, data } = error as { [k: string]: unknown };

  return (
    <MainLayout>
      <div className="flex h-full w-full flex-col items-center justify-center gap-3">
        <div>{`${status} ${statusText}`}</div>
        <div>{`${data} ${statusText}`}</div>
        <div className="flex flex-row items-center justify-center gap-3">
          <Button
            className="flex flex-row items-center gap-3 pl-3 pr-6"
            onClick={() => {
              navigate(-1);
            }}
          >
            <BiArrowBack />
            <div>{`BACK`}</div>
          </Button>
          <Button
            className="flex flex-row items-center gap-3 pl-3 pr-6"
            onClick={() => {
              navigate("/");
            }}
          >
            <CgHomeAlt />

            <div>{`HOME`}</div>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
