import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Download from "../../../../../public/img/verify/download.svg";
import TopSvg from "../../../../public/img/nav-button/top.svg";
import ProjectDetail from "../../../../public/img/project-detail.svg";
import Start from "../../../../public/img/start.svg";
import Delete from "../../../../public/img/ph_trash.svg";
import Stop from "../../../../public/img/stop.svg";
import DropdownItem from "../Dropdown";
import PreviewSvg from "../../../../public/img/preview.svg";
import Approve from "../../../../public/img/verify/ok.svg";
import Reject from "../../../../public/img/verify/cross.svg";

interface Props {
  verificationType?: any;
  projectId?: any;
  projectName?: any;
  projectDescription?: any;
  status?: string;
  projectLogo?: any;
  total?: any;
  current?: any;
  rate?: any;
  launch_date?: any;
  price?: any;
  totalAmount?: any;
  investedAmount?: any;
  currentSupply?: any;
  expectedAmount?: any;
  depositedAmount?: any;
  InvestReview?: any;
  preview?: any;
  tokenTicker?: any;
  tokenName?: any;
  campaignDropdown?: any;
  pendingApproval?: any;
  invests?: any;
  maxInvestmentAmount?: any;
  minInvestmentAmount?: any;
  tokenSupply?: any;
  totalUnit?: any;
  handleReviewClick?: () => void;
  handleInvestClick?: () => void;
  handleDetailClick?: () => void;
  handleSendToken?: () => void;
  handleActionsClick?: () => void;
  handleDeleteClick?: (projectId?: any) => void;
  handleApprove?: (verificationType?: any) => void;
  handleReject?: (verificationType?: any) => void;
  handleStartClick?: (projectId?: any) => void;
  handleStopClick?: (projectId?: any) => void;
  handleAddUser?: () => void;
  handleDetailPageClick?: () => void;
  handleDetailPage?: (projectId?: any) => void;
  handlePrewviewClick?: () => void;
}
const DynamicCardObject: React.FC<Props> = ({
  projectId,
  verificationType,
  projectName,
  status,
  projectDescription,
  invests,
  projectLogo,
  currentSupply,
  total,
  current,
  handleSendToken,
  rate,
  launch_date,
  price,
  depositedAmount,
  totalAmount,
  investedAmount,
  expectedAmount,
  handleReviewClick,
  handleInvestClick,
  InvestReview,
  handleDetailClick,
  handleDeleteClick,
  handleActionsClick,
  totalUnit,
  preview,
  tokenTicker,
  pendingApproval,
  campaignDropdown,
  handleApprove,
  handleReject,
  maxInvestmentAmount,
  tokenName,
  tokenSupply,
  minInvestmentAmount,
  handleStopClick,
  handleStartClick,
  handleAddUser,
  handleDetailPageClick,
  handlePrewviewClick,
  handleDetailPage,
}) => {
  const router = useRouter();

  useEffect(() => {
    if (InvestReview) {
      setIsButtonUsed(true);
    } else {
      setIsButtonUsed(false);
      setIsBoxOpen(false);
    }
  }, [InvestReview]);

  useEffect(() => {
    const percent = (investedAmount / totalAmount) * 100;

    setPercentFilled(percent > 100 ? 100 : percent);
  }, [investedAmount, totalAmount]);
  const [filledColor, setFilledColor] = useState("#7C7E894D");

  const [percentFilled, setPercentFilled] = useState(
    (Number(investedAmount) / Number(totalAmount)) * 100
  );
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const handleStatusDropdownClick = () =>
    setShowStatusDropdown(!showStatusDropdown);

  // useEffect(() => {
  //   setPercentFilled((Number(investedAmount) / Number(totalAmount)) * 100);
  // }, [investedAmount, totalAmount]);
  // const isFilled = percentFilled > 0;

  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [isButtonUsed, setIsButtonUsed] = useState(false);
  const { t, i18n } = useTranslation(["translation"]);
  const toggleBox = () => {
    setIsBoxOpen(!isBoxOpen);
  };

  const customFormattedValue = ({ value }) => {
    const formattedValue = Number(value).toLocaleString(
      i18n.language === "en-US" ? "en-US" : "tr-TR",
      {
        minimumFractionDigits: 0,
        maximumFractionDigits: 3,
      }
    );
    return formattedValue.replace(/,/g, ",");
  };

  return (
    <div className={`card-campaign ${isButtonUsed ? "active" : "passive"}`}>
      <div className="card-body">
        <div className="">
          <div className="content-box">
            <div className="content-box-wrapper">
              <div className="text-title">{projectName}</div>
              {/* {status && (
                <div className="card-status">
                  <div className="status-text">{status}</div>
                </div>
              )} */}

              {pendingApproval && (
                <div className="d-flex gap-4 align-items-center">
                  <button
                    className="btn-get-started scrollto"
                    style={{
                      border: "1px solid orange",
                      padding: "5px 12px",
                      borderRadius: "8px",
                      background: "#fff",
                    }}
                    onClick={handlePrewviewClick}>
                    <span className="green-color">{t("button.preview")}</span>
                    <img src="/images/icons/see.svg" alt="" className="ps-2" />
                  </button>
                </div>
              )}
            </div>
            <div className="card-img-wrapper">
              <div className="right-wrapper">
                <img className="right-img" alt="Images" src={projectLogo} />
              </div>
            </div>
          </div>

          <div className="detail-content-box">
            <div
              dangerouslySetInnerHTML={{ __html: projectDescription }}
              className="campaign-detail my-4"
            />

            <div className="detail-content mb-4">
              <div className="price-box">
                <div className="text-wrapper-5">{t("card.totalRaise")}:</div>
                <div className="text-wrapper-6">
                  {customFormattedValue({ value: total })} {totalUnit}
                </div>
              </div>

              <div className="campaign-date">
                <div className="text-wrapper-5">{t("card.launchDate")}:</div>
                <div className="text-wrapper-6">{launch_date}</div>
              </div>
              <div className="campaign-date">
                <div className="text-wrapper-5">{t("card.price")}:</div>
                <div className="text-wrapper-6">{price}</div>
              </div>
            </div>
          </div>
          <div className="percent-range-box">
            {/* <LinearProgressBar percent={currentSupply}></LinearProgressBar> */}
            {/* 
            <div className="d-flex align-items-center justify-content-between">
              <div className="text-medium fw-bolder">{investedAmount}</div>
              <div className="text-medium fw-bolder">
                {currentSupply} /{customFormattedValue({ value: totalAmount })}{" "}
                {tokenTicker}
              </div>{" "}
            </div> */}
          </div>
        </div>
      </div>
      {!pendingApproval && isButtonUsed && (
        <div className="button-group ">
          {InvestReview && (
            <>
              <div
                className={`d-flex align-items-center justify-content-center gap-3 ${
                  isBoxOpen ? "flex-column" : ""
                }`}>
                {handleInvestClick && (
                  <button
                    className="btn button-card  button-bg hover-card-button d-flex align-items-center justify-content-center gap-3"
                    onClick={handleInvestClick}>
                    <span className="white-color">{t("button.investNow")}</span>
                  </button>
                )}
                {/* {handleDetailClick && (
                  <button
                    onClick={handleDetailClick}
                    className="btn button-card button-border">
                    <span className="green-color">{t("button.details")}</span>
                  </button>
                )} */}
                {handleDetailPageClick && (
                  <button
                    onClick={handleDetailPageClick}
                    className="btn button-card button-border button-bg">
                    <span className="white-color">{t("button.details")}</span>
                  </button>
                )}
                {handleSendToken && (
                  <button
                    onClick={handleSendToken}
                    className="btn button-card button-border button-bg">
                    <span className="white-color">{t("navbar.claim")}</span>
                  </button>
                )}
                {handleAddUser && (
                  <button
                    onClick={handleAddUser}
                    className="btn button-card button-border button-bg">
                    <span className="white-color">
                      {t("whiteList.addUser")}
                    </span>
                  </button>
                )}
                {handleActionsClick && (
                  <div className="position-relative w-100">
                    <button
                      className="btn button-card  button-bg  d-flex align-items-center justify-content-center gap-3"
                      onClick={toggleBox}>
                      <span className="white-color">{t("button.actions")}</span>{" "}
                      <img src={TopSvg} alt="" />
                    </button>
                  </div>
                )}

                <>
                  {isBoxOpen && (
                    <div
                      className=""
                      style={{
                        padding: "30px 20px",
                        marginBottom: "70px",
                        background: " #FFFFFF",
                        borderRadius: "6px",
                        position: "absolute",
                        zIndex: 99999,
                        width: "380px",
                        boxShadow:
                          "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                      }}>
                      <DropdownItem
                        icon={ProjectDetail}
                        text={t("button.projectDetail")}
                        onClick={handleDetailPage}
                      />
                      {/* {status === "Active" && (
                        <DropdownItem
                          icon={Stop}
                          text={t("button.stopProject")}
                          onClick={() => {
                            handleStopClick(projectId);
                            setIsBoxOpen(!isBoxOpen);
                          }}
                        />
                      )}
                      {status === "Stopped" && (
                        <DropdownItem
                          icon={Start}
                          text={t("button.startProject")}
                          onClick={() => {
                            handleStartClick(projectId);
                            setIsBoxOpen(!isBoxOpen);
                          }}
                        />
                      )} */}

                      <div
                        onClick={() => {
                          handleDeleteClick(projectId);
                          setIsBoxOpen(!isBoxOpen);
                        }}
                        className="pb-3 d-flex align-items-center gap-2 cursor-pointer background-hover">
                        <Image src={Delete} alt="" />
                        <span className="userlist-info red-color">
                          {t("button.deleteProject")}
                        </span>
                      </div>
                      <div
                        onClick={() => setIsBoxOpen(!isBoxOpen)}
                        className="pb-2 d-flex align-items-center gap-2 cursor-pointer background-hover">
                        <img src="/img/x.svg" alt="" />
                        <span className="userlist-info">
                          {t("button.cancel")}
                        </span>
                      </div>
                    </div>
                  )}
                </>
              </div>
            </>
          )}
        </div>
      )}
      {pendingApproval && isButtonUsed && (
        <div className="button-group ">
          {" "}
          <div className="d-flex align-items-center justify-center gap-3 ">
            {handleApprove && (
              <button
                className="approve-btn w-100 gap-2"
                onClick={() => handleApprove(verificationType)}>
                {t("button.approve")} <img src="/img/verify/ok.svg" alt="" />
              </button>
            )}
            {handleReject && (
              <button
                className="reject-btn w-100 gap-2"
                onClick={() => handleReject(verificationType)}>
                {t("button.reject")} <img src="/img/verify/cross.svg" alt="" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicCardObject;
