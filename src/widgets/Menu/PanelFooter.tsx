import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon, CogIcon, SvgProps } from "../../components/Svg";
import Text from "../../components/Text/Text";
import Flex from "../../components/Flex/Flex";
import Dropdown from "../../components/Dropdown/Dropdown";
import Link from "../../components/Link/Link";
import Skeleton from "../../components/Skeleton/Skeleton";
// import Button from "../../components/Button/Button";
import IconButton from "../../components/Button/IconButton";
// import MenuButton from "./MenuButton";
import * as IconModule from "./icons";
import { socials, MENU_ENTRY_HEIGHT } from "./config";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
// const { MoonIcon, SunIcon, LanguageIcon } = Icons;

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`;

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 22px;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  // toggleTheme,
  // isDark,
  CFNPriceUsd,
  cakePriceUsd,
  // currentLang,
  // langs,
  // setLang,
  CFNPriceLink,
  priceLink,
  tokenImgLink,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      <SettingsEntry style={{ justifyContent: "center" }}>
        <Flex style={{ width: "100%", justifyContent: "center" }}>
          {socials.map((social, index) => {
            const Icon = Icons[social.icon];
            const iconProps = {
              width: "30px",
              color: "textSubtle",
              style: { cursor: "pointer", verticalAlign: "middle" },
            };
            const mr = index < socials.length - 1 ? "20px" : 0;
            if (social.items) {
              return (
                <Dropdown key={social.label} position="top" target={<Icon {...iconProps} mr={mr} />}>
                  {social.items.map((item) => (
                    <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle">
                      {item.label}
                    </Link>
                  ))}
                </Dropdown>
              );
            }
            return (
              <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
                <Icon {...iconProps} />
              </Link>
            );
          })}
        </Flex>
        {/* <Button variant="text" onClick={() => toggleTheme(!isDark)}>
          alignItems center is a Safari fix
          <Flex alignItems="center">
            <SunIcon color={isDark ? "textDisabled" : "text"} width="30px" />
            <Text color="textDisabled" mx="4px">
              /
            </Text>
            <MoonIcon color={isDark ? "text" : "textDisabled"} width="30px" />
          </Flex>
        </Button> */}
        {/* <Dropdown
          position="top-right"
          target={
            <Button variant="text" startIcon={<LanguageIcon color="textSubtle" width="30px" />}>
              <Text color="textSubtle">{currentLang?.toUpperCase()}</Text>
            </Button>
          }
        >
          {langs.map((lang) => (
            <MenuButton
              key={lang.code}
              fullWidth
              onClick={() => setLang(lang)}
              // Safari fix
              style={{ minHeight: "32px", height: "auto" }}
            >
              {lang.language}
            </MenuButton>
          ))}
        </Dropdown> */}
      </SettingsEntry>
      <SocialEntry>
        <Flex style={{ width: '100%', justifyContent: 'space-between'}}>
        {CFNPriceUsd ? (
          <PriceLink href={CFNPriceLink} target="_blank" style={{ margin: "auto" }}>
            <PancakeRoundIcon width="30px" mr="8px" />
            <Text color="textSubtle" bold>{`$${CFNPriceUsd.toFixed(3)}`}</Text>
          </PriceLink>
        ) : null}
        {cakePriceUsd ? (
          <PriceLink href={priceLink} target="_blank" style={{ margin: "auto" }}>
            <PancakeRoundIcon tokenImgLink={tokenImgLink} width="30px" mr="8px" />
            <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
          </PriceLink>
        ) : (
          <Skeleton width={80} height={24} />
        )}
        </Flex>
      </SocialEntry>
    </Container>
  );
};

export default PanelFooter;
