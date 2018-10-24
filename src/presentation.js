// Import React
import React from 'react';
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Image,
  Appear,
  CodePane,
  Text,
  Link,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#d62274',
    secondary: 'white',
    tertiary: '#1F2022',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    const assetsUrl = 'https://raw.githubusercontent.com/sebastianmusial/component-style-guide/master/src';

    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Component Style Guide 
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <List>
            <Appear>
              <ListItem>zakres styli</ListItem>
            </Appear>
            <Appear>
              <ListItem>uniwersalność komponentów</ListItem>
            </Appear>
            <Appear>
              <ListItem>płynne skalowanie</ListItem>
            </Appear>
            <Appear>
              <ListItem>spójność typografii i odległości</ListItem>
            </Appear>
            <Appear>
              <ListItem>łatwość konfiguracji</ListItem>
            </Appear>
            <Appear>
              <ListItem>kolory</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Image src={`${assetsUrl}/images/ie-win.gif`} width="1000"></Image>
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="html"
          code={require('./code/css-scope').default}
          ranges={[
            { loc: [0, 0], title: "Zakres styli #1" },
            { loc: [0, 1] },
            { loc: [0, 1], image: `${assetsUrl}/images/not-bad.gif` },
            { loc: [0, 1], note: "Co z zakresem?" },
            { loc: [0, 1], note: "Modyfikatory w różnych miejscach? 😱" },
            { loc: [3, 11] },
            { loc: [4, 7], note: "😱 headline?! u-text--white?!" },
            { loc: [7, 10], note: "😱 description?! u-margin--small?!" },
            { loc: [12, 17] },
            { loc: [12, 17], image: `${assetsUrl}/images/confused.gif` },
          ]}/>

        <CodeSlide
          transition={['fade']}
          lang="html"
          code={require('./code/css-scope-2').default}
          ranges={[
            { loc: [0, 0], title: "Zakres styli #2" },
            { loc: [0, 1] },
            { loc: [0, 1], image: `${assetsUrl}/images/great.gif` },
            { loc: [3, 7], note: "Modyfikatory w komponencie 👌" },
            { loc: [7, 10], note: "Ogarnięta struktura 👌" },
            { loc: [10, 13], note: "Ogarnięta struktura 👌" },
            { loc: [15, 26] },
          ]}/>

        <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
          <BlockQuote>
            <Quote>Zróbmy wyjątek i zamieńmy kolejność tekstu.</Quote>
            <Cite textColor="secondary">Pomysłowy grafik</Cite>
          </BlockQuote>
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="html"
          code={require('./code/css-scope-3').default}
          ranges={[
            { loc: [0, 0], title: "Zakres styli #3" },
            { loc: [0, 8] },
            { loc: [9, 17], note: "Uniwersalna struktura 👌" },
            { loc: [19, 26] },
            { loc: [32, 35], note: "Mały komponent 👌" },
            { loc: [36, 40], note: "Dedykowane style 👌" },
            { loc: [42, 45], note: "Mały komponent 👌" },
            { loc: [46, 50], note: "Dedykowane style 👌" },
            { loc: [46, 50], image: `${assetsUrl}/images/bravo.gif` },
          ]}/>

        <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
          <BlockQuote>
            <Quote>A czemu fonty na mobile są takie duże?</Quote>
            <Cite textColor="secondary">Spostrzegawczy grafik</Cite>
          </BlockQuote>
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="css"
          code={require('./code/interpolation').default}
          ranges={[
            { loc: [0, 0], title: 'Media query' },
            { loc: [0, 11],  },
          ]}
        />
        
        <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
          <Image src={`${assetsUrl}/images/media-query-opt.gif`} width="1000"></Image>
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="css"
          textSize={22}
          code={require('./code/interpolation-2').default}
          ranges={[
            { loc: [0, 11], title: 'Interpolacja liniowa' },
          ]}/>

        <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
          <Image src={`${assetsUrl}/images/viewport-opt.gif`} width="1000"></Image>
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="css"
          textSize={22}
          code={require('./code/interpolation-3').default}
          ranges={[
            { loc: [0, 11], title: 'Interpolacja liniowa + breakpointy' },
          ]}
        />

        <CodeSlide
          transition={['fade']}
          lang="css"
          textSize={22}
          code={require('./code/interpolation-4').default}
          ranges={[
            { loc: [0, 11], title: 'Interpolacja liniowa + breakpointy' },
          ]}/>

        <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
          <Image src={`${assetsUrl}/images/viewport-2-opt.gif`} width="1000"></Image>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
          <Image src={`${assetsUrl}/images/viewport-2-opt-chart.png`}  width="1000"></Image>
          <Text textSize={20} lineHeight={1} textColor="secondary">
            Interpolacja liniowa + breakpointy
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
          <Image src={`${assetsUrl}/images/polynomial-regression-opt.png`} width="1000"></Image>
          <Text textSize={20} lineHeight={1} textColor="secondary">
            Aproksymacja wielomianowa
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
          <Image src={`${assetsUrl}/images/polynomial-regression-opt-pattern.png`}></Image>
          <CodePane
            transition={['fade']}
            lang="css"
            textSize={22}
            margin={40}
            source={require('./code/polynomial-regression').default}
          />
          <Appear>
            <Text textSize={20} lineHeight={1} textColor="secondary">
              W CSS to nie zadziała 🤬 💔 🤬
            </Text>
          </Appear>
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="css"
          code={require('./code/interpolation-mixin').default}
          textSize={15}
          ranges={[
            { loc: [0, 0], title: 'Interpolacja liniowa' },
            { loc: [0, 0], image: `${assetsUrl}/images/viewport-2-opt-pattern.png` },
            { loc: [3, 9] },
            { loc: [10, 14], image: `${assetsUrl}/images/viewport-2-opt-pattern-2.png` },
            { loc: [10, 14] },
            { loc: [10, 14], image: `${assetsUrl}/images/math.gif` },
            { loc: [15, 19] },
            { loc: [20, 24] },
            { loc: [25, 26] },
            { loc: [29, 33] },
            { loc: [34, 37] },
            { loc: [38, 42] },
            { loc: [43, 47] },
          ]}/>

        <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
          <BlockQuote>
            <Quote>Krój fonta musi zostać zmieniony i jest on jednak wszędzie za mały...</Quote>
            <Cite textColor="secondary">Typo Grafik</Cite>
          </BlockQuote>
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="css"
          code={require('./code/typo-config').default}
          ranges={[
            { loc: [0, 0], title: 'Konfiguracja' },
            { loc: [0, 5], note: "Krój fonta" },
            { loc: [6, 11], note: "Rozmiar fonta" },
          ]}
        />

        <CodeSlide
          transition={['fade']}
          lang="css"
          code={require('./code/typo-extensions').default}
          textSize={26}
          ranges={[
            { loc: [0, 0], title: 'Automatyzacja kodu' },
            { loc: [0, 5], note: "Krój fonta" },
            { loc: [6, 11], note: "Rozmiar fonta" },
            { loc: [13, 20], note: "Kod wynikowy" },
          ]}
        />

        <CodeSlide
          transition={['fade']}
          lang="css"
          code={require('./code/typo-example').default}
          textSize={26}
          ranges={[
            { loc: [0, 0], title: 'Jak używać?' },
            { loc: [1, 5], note: "Globalne ustawienia" },
            { loc: [7, 11], note: "Ustawienia komponentu" },
          ]}
        />

        <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
          <BlockQuote>
            <Quote>A może wykorzystać interpolacje w odlgłościach?</Quote>
            <Cite textColor="secondary">Front-end Developer</Cite>
          </BlockQuote>
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="css"
          code={require('./code/dimensions-config').default}
          textSize={26}
          ranges={[
            { loc: [0, 5], title: 'Konfiguracja' },
          ]}
        />

        <CodeSlide
          transition={['fade']}
          lang="css"
          code={require('./code/dimensions-extensions').default}
          textSize={26}
          ranges={[
            { loc: [0, 0], title: 'Automatyzacja kodu' },
            { loc: [0, 7] },
            { loc: [7, 12] },
            { loc: [13, 18] },
            { loc: [19, 24] },
            { loc: [25, 30] },
            { loc: [31, 36] },
            { loc: [37, 45] },
            { loc: [46, 54] },
          ]}
        />

        <CodeSlide
          transition={['fade']}
          lang="css"
          code={require('./code/dimensions-example').default}
          textSize={26}
          ranges={[
            { loc: [0, 5], title: 'Jak używać?' },
          ]}
        />

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Jak ogarnąć kolory w projekcie? 
          </Heading>
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="css"
          code={require('./code/colors').default}
          textSize={26}
          ranges={[
            { loc: [0, 0], title: 'Konfiguracja' },
            { loc: [0, 5], note: 'Kolory podstawowe' },
            { loc: [8, 16], note: 'Kolory wizerunkowe' },
            { loc: [19, 22], note: 'Standardowa typografia' },
            { loc: [25, 30], note: 'Standardowe tła' },
            { loc: [33, 39], note: 'Kolory powiadomień' },
            { loc: [42, 47], note: 'Kolory komponentowe' },
          ]}
        />

        <CodeSlide
          transition={['fade']}
          lang="css"
          code={require('./code/colors-example').default}
          textSize={26}
          ranges={[
            { loc: [0, 0], title: 'Jak używać?' },
            { loc: [0, 5], note: 'Podstawowa klasa' },
            { loc: [6, 12], note: 'Generator klas' },
          ]}
        />

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Kongifuracja
          </Heading>
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="css"
          code={require('./code/configuration').default}
          textSize={26}
          ranges={[
            { loc: [0, 0], title: 'Konfiguracja' },
            { loc: [7, 16], note: 'Zmienne' },
            { loc: [19, 22], note: 'Wygenerowane rozszerzenia styli' },
            { loc: [27, 30], note: 'Przykładowy komponent' },
            { loc: [36, 41], note: 'Konfiguracja importu plików (Angular)' },
          ]}
        />

        <Slide transition={['fade']} bgColor="primary">
          <Image src={`${assetsUrl}/images/typowy-seba.png`} width="500"></Image>
          <Appear>
            <Link href="https://github.com/sebastianmusial" target="_blank">
              <Text textSize={24} padding={20} lineHeight={1} textColor="secondary">
                GitHub - sebastianmusial
              </Text>
            </Link>
          </Appear>
        </Slide>

      </Deck>
    );
  }
}
