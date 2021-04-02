import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, makeStyles } from "@material-ui/core";
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 1.5),
  },
}));
//위에까지가 수정해야할 css
function InfoCard(props) {
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();
  const data = props.data;
  const handleClose = (e) => {
    props.close();
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   props.close();
  // };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div id="simple-modal-description">
        <Link to={"/mypage"}>
          <div>책 손상시키지 마세여~~ 그럼 혼나여~~ 지민이가 혼낼거임;</div>
          <button value="add" onClick={() => props.handleAdd(data)}>
            빌리기
          </button>
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <Modal
        open={props.open ? true : false}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
}

export default InfoCard;
