import React, { useEffect, useState } from 'react';
import Style from './withDataFetching.style';

const withDataFetching = <Props extends object>(
  dataName: string,
  fetchFunction: (props: Props) => any,
  shouldCallEffect: (props: Props) => any[],
) => (BaseComponent: React.ComponentType<Props>) => (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<string | null>();
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const { body: fetchedData } = await fetchFunction(props);
        setData(fetchedData);
      } catch (caughtError) {
        setError(caughtError.toString());
      }
      setLoading(false);
    };
    fetch();
  }, [...shouldCallEffect(props)]);
  return (
    <Style.Container>
      {loading && (
        <Style.Loader src="https://trello-attachments.s3.amazonaws.com/5d0ce56e059f0263f02e0155/5d0ce56e059f0263f02e016f/x/f020b178de9e22691149d450613f8f52/loader.svg" />
      )}
      {error && (
        <Style.Error>
          Oh no !<br /> The following error happened:
          <br /> {error}
        </Style.Error>
      )}
      {data && <BaseComponent {...props} {...{ [dataName]: data }} />}
    </Style.Container>
  );
};

export default withDataFetching;
