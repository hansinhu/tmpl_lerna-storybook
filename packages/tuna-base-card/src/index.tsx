import React, { useState } from "react";
import { Card } from "antd";
import { CardProps } from "antd/lib/card";
import { FullscreenOutlined } from "@ant-design/icons";
import "./index.scss";

interface ICardProps extends CardProps {
  supportFullScreen?: boolean;
}

const BaseCard = ({
  className,
  children,
  extra,
  supportFullScreen = false,
  title,
  ...rest
}: ICardProps) => {
  const [fullScreen, setFullScreen] = useState(false);

  // 判断是否有header头
  const hasHeader = !!(extra || title);

  const handleFullScreen = () => {
    const curFullScreen = !fullScreen;
    setFullScreen(curFullScreen);
  };

  return (
    <>
      <Card
        title={title}
        {...rest}
        className={`tuna-bc-baseCard ${className} ${
          fullScreen && "tuna-bc-fullScreen"
        }`}
        extra={
          hasHeader && (
            <>
              {extra}
              {supportFullScreen && (
                <div
                  className={`tuna-bc-headerFull ${
                    fullScreen && "tuna-bc-iconRotate"
                  }`}
                  onClick={handleFullScreen}
                >
                  <FullscreenOutlined />
                </div>
              )}
            </>
          )
        }
      >
        {!hasHeader && supportFullScreen && (
          <div
            className={`tuna-bc-bodyFull ${fullScreen && "tuna-bc-iconRotate"}`}
            onClick={handleFullScreen}
          >
            <FullscreenOutlined />
          </div>
        )}
        {children}
      </Card>
    </>
  );
};

export default BaseCard;
