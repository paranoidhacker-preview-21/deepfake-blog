**Basic Example**
```jsx
import React from "react";
import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

import theme from "../../../theme";
<ThemeProvider theme={theme}>
    <HeroSimpleBackground backgroundImage="/assets/images/shapes/banner-bg.svg">
        <Section narrow>
            <SectionHeader
                title="Deepfake Detection powered by Adobe Sensei"
                titleVariant="h2"
                subtitle="Our mission is to determine the legitimacy of information presented online, especially given that deepfakes may be used maliciously as a source of misinformation, manipulation, harassment, and persuation."
                ctaGroup={[(
                    <Button color="primary" variant="contained" size="large">Try for free</Button>
                ), (
                    <Button color="primary" variant="outlined" size="large">See pricings</Button>
                )]}
            />
        </Section>
    </HeroSimpleBackground>
</ThemeProvider>
```