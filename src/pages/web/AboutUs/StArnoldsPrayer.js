import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';

const StArnoldsPrayer = () => { 
    return (
        <BaseWithBannerAndOverview data={navlinks.about_us.items} title={`St.arnold's Prayer`} banner={banners.AboutUsBannerObj}>
            <Paragraph color='primary' bold>
                ST.ARNOLD'S JEWEL (OPENING PRAYER)
            </Paragraph>
            {[  
                'L. God, Eternal truth',
                'A. We Believe in you',
                'L. God, our Strength and salvation',
                'A. We trust in you',
                'L. God, infinite goodness',
                'A. We love you with all our heart',
                'L. You sent the WORD into the world as our savior.',
                'A. Make us all one in Him',
                'L. Fill us with the Spirit of Christ',
                'A. That we may glorify your Name. Amen',
                'L. May the Holy Triune God Live and Reign in our Hearts',
                'A. And in the hearts of all. Amen'
                ].map(line => <Paragraph >{line}</Paragraph>)
            }
            <Paragraph bold>
                ST.ARNOLD'S MOTTO (CLOSING PRAYER)
            </Paragraph>
            {[
                    'L. May the darkness of sin and the night of unbelief vanish before the light of the WORD and the spirit of Grace!',
                    'A. And may the Heart of Jesus live in every heart. Amen',
                    'L. Sts. Arnold Janssen and Joseph Freinademetz',
                    'A. Pray for us'
                ].map(line => <Paragraph>{line}</Paragraph>)
            }
        </BaseWithBannerAndOverview>
    )
}

export default StArnoldsPrayer
