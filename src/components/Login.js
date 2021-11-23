import { Text, Button, Box, Flex } from "@chakra-ui/react";
import Layout from "./Layout";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [provider, setProvider] = useState(null);

  const connectWalletHandler = () => {
    if (window.ethereum && defaultAccount == null) {
      // set ethers provider
      setProvider(new ethers.providers.Web3Provider(window.ethereum));

      // connect to metamask
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          // setConnButtonText("Wallet Connected");
          setDefaultAccount(result[0]);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else if (!window.ethereum) {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  useEffect(() => {
    if (defaultAccount) {
      provider.getBalance(defaultAccount).then((balanceResult) => {
        setUserBalance(ethers.utils.formatEther(balanceResult));
      });
    }
  }, [defaultAccount]);

  return (
    <Layout>
      <Text my="7">Login Page</Text>
      <Button onClick={connectWalletHandler}>Connect MetaMask</Button>
      <Text my="7">Address: {defaultAccount}</Text>
      <Text>Balance: {userBalance}</Text>
      <Text>{errorMessage}</Text>
    </Layout>
  );
};

export default Login;
