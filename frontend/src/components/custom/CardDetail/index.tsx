import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Bg from "../../../../public/img/projects/frame.png";
import Image from "next/image";
import DiscordLogo from "../../../../public/img/card/DiscordLogo.svg";
import Globe from "../../../../public/img/card/Globe.svg";
import Insta from "../../../../public/img/card/InstagramLogo.svg";
import Telegram from "../../../../public/img/card/TelegramLogo.svg";
import LinearProgressBar from "../../ProgressBar";
import Link from "next/link";

interface Props {
  projectId?: any;
  projectName?: any;
  projectShortDescription?: any;
  status?: string;
  projectLogo?: any;
  tokenSupply?: any;
  total?: any;
  current?: any;
  rate?: any;
  totalUnit?: any;
  currentSupply?: any;
  launch_date?: any;
  price?: any;
  totalAmount?: any;
  tokenName?: any;
  investedAmount?: any;
  expectedAmount?: any;
  depositedAmount?: any;
  InvestReview?: any;
  maxInvestmentAmount?: any;
  minInvestmentAmount?: any;
  maxInvestmentUnit?: any;
  minInvestmentUnit?: any;
  websiteLink?: any;
  whitePaper?: any;
  discordLink?: any;
  telegramLink?: any;
  instagramLink?: any;
  tokenTicker?: any;
  handleReviewClick?: () => void;
  handleInvestClick?: () => void;
  handleDetailClick?: () => void;
  className?: any;
}
const DynamicCardDetail: React.FC<Props> = ({
  projectId,
  projectName,
  status,
  projectShortDescription,
  projectLogo,
  total,
  totalUnit,
  currentSupply,
  totalAmount,
  investedAmount,
  handleInvestClick,
  InvestReview,
  tokenName,
  minInvestmentAmount,
  minInvestmentUnit,
  maxInvestmentAmount,
  maxInvestmentUnit,
  whitePaper,
  websiteLink,
  discordLink,
  telegramLink,
  instagramLink,
  tokenTicker,
  className,
}) => {
  const router = useRouter();
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [isButtonUsed, setIsButtonUsed] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (InvestReview) {
      setIsButtonUsed(true);
    } else {
      setIsButtonUsed(false);
      setIsBoxOpen(false);
    }
  }, [InvestReview]);

  function updateStatus(newStatus: any) {
    var imageElement = document.getElementById("statusImage");
    if (imageElement instanceof HTMLImageElement) {
      var imagePath = `/img/card/${newStatus.toLowerCase()}.svg`;
      imageElement.src = imagePath;
    } else {
      console.error("Element with id 'statusImage' is not an image element.");
    }
  }

  var newStatus = status;
  updateStatus(newStatus);
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
    <div
      className={`card-detail-project ${isButtonUsed ? "active" : "passive"}`}
    >
      <div className="card-body ">
        <div className="row gap-5 justify-content-between">
          <div className="row col-md-5 gap-5">
            <div className="content-box ">
              <div className="card-img-wrapper">
                <div className="right-wrapper">
                  <img className="right-img" alt="Images" src={projectLogo} />{" "}
                </div>
              </div>
              <div className="content-box-wrapper">
                <div className="text-title">{projectName}</div>
                <div className="card-status">
                  <div className="d-flex align-items-center gap-2">
                    <img id="statusImage" alt="Status Image" />
                    <span className={`status-textt ${status}-color`}>
                      {" "}
                      {status}
                    </span>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="description-text"> {projectShortDescription} </div>
            <div className="contact-wrapper align-items-end">
              {websiteLink && (
                <div className="contact-card">
                  <Link
                    href={
                      websiteLink.startsWith("http")
                        ? websiteLink
                        : `http://${websiteLink}`
                    }
                    target="_blank"
                    className="d-flex align-items-center gap-2"
                  >
                    <Image src={Globe} alt="" />
                    <span className="text-medium">
                      {t("card.visitWebsite")}
                    </span>
                  </Link>
                </div>
              )}
              {whitePaper && (
                <div className="contact-card">
                  <a
                    href={whitePaper}
                    download
                    className="d-flex align-items-center gap-2"
                  >
                    <img
                      src="/img/card/material-symbols_download-sharp.svg"
                      alt=""
                    />
                    <span className="text-medium">{t("card.whitePaper")}</span>
                  </a>
                </div>
              )}

              {discordLink && (
                <div className="contact-card">
                  <Link href={discordLink}>
                    <Image src={DiscordLogo} alt="" />
                  </Link>
                </div>
              )}
              {telegramLink && (
                <div className="contact-card">
                  <Link href={telegramLink}>
                    <Image src={Telegram} alt="" />
                  </Link>
                </div>
              )}
              {instagramLink && (
                <div className="contact-card">
                  <Link href={instagramLink}>
                    <Image src={Insta} alt="" />
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6 card-bg">
            <div className="detail-content-box">
              <div className="detail-content mb-4">
                <div className="detail-price-box">
                  <div className="title-area">{t("card.totalRaise")} :</div>
                  <div className="price-area">
                    {customFormattedValue({ value: total })} {totalUnit}
                  </div>
                </div>
                <div className="detail-equality">
                  <span>1 AVAX</span>
                  <span> = </span>
                  <span>0.01 {tokenTicker}</span>
                </div>
              </div>
            </div>
            <div className="percent-range-box">
              <div className="text-medium fw-bolder text-end ">
                {customFormattedValue({ value: currentSupply })} %
              </div>
              <div className="percent-range my-2">
                <LinearProgressBar percent={currentSupply}></LinearProgressBar>
              </div>

              <div className="d-flex align-items-center justify-content-between my-2">
                <div className="text-medium fw-bolder">{investedAmount}</div>
                <div className="text-medium fw-bolder">
                  <span>{currentSupply}</span> /{" "}
                  <span className="gradient-text">
                    {customFormattedValue({ value: totalAmount })} {tokenTicker}
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between my-2">
                <div className="min-max-text fw-bolder">
                  {t("card.minInvestmentAmount")}
                </div>
                <div className="text-medium fw-bolder">
                  {customFormattedValue({ value: minInvestmentAmount })}{" "}
                  {minInvestmentUnit}
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between my-2">
                <div className="min-max-text fw-bolder">
                  {t("card.maxInvestmentAmount")}
                </div>
                <div className="text-medium  fw-bolder">
                  {customFormattedValue({ value: maxInvestmentAmount })}{" "}
                  {maxInvestmentUnit}
                </div>
              </div>
            </div>
            {isButtonUsed && (
              <div className="button-group p-0">
                {InvestReview && (
                  <>
                    <div className="d-flex align-items-center justify-content-center gap-3 pt-3">
                      <button
                        className={`btn button-card py-3 ${
                          className ? " disabled-button button-bg" : "button-bg"
                        } d-flex align-items-center justify-content-center gap-3`}
                        onClick={handleInvestClick}
                        disabled={className}
                      >
                        <span className="white-color">
                          {t("button.investNow")}
                        </span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicCardDetail;
