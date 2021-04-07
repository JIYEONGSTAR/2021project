import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, makeStyles } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
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
        <Alert severity="info">
          <i class="fas fa-exclamation">대여기간을 지켜주세요</i>
          <i class="fas fa-exclamation">
            책에 필기는 X, 강조는 O (단, 노란색 형광펜만)
          </i>
          <i class="fas fa-exclamation">
            강조는 모두를 위해 필요한 곳에만 해주세요
          </i>
          <i class="fas fa-exclamation">모두를 위해 확인해주세요</i>
        </Alert>

        <Link to={"/mypage"}>
          <button value="add" onClick={() => props.handleAdd(data)}>
            확인
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
