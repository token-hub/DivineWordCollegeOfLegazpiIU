import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph, BoldSpan} from '../../../components/atoms/web';

const TheJingle = () => { 

    return (
        <BaseWithBannerAndOverview data={navlinks.about_us.items} title='The Jingle' banner={banners.AboutUsBannerObj}>
            <Paragraph>
                    Composed By: Anne Kathrine A. Francia <br />
                Arranger: James Andrew Atos <br />
                Singer: Dianne Deang <br />
            </Paragraph>
            <Paragraph>
                Our dreams are there to weave <br />
                Our hopes are there to achieve <br />
                There is so much time to give <br />
                So much life to live <br />
            </Paragraph>
            <Paragraph>
                <BoldSpan> Refrain </BoldSpan> <br />
                We can soar high <br />
                So high, <br />
                Witnessing to the word anew <br />
                At Divine Word College <br />
            </Paragraph>
            <Paragraph>
                Our dreams come true <br />
                In excellence we yearn to see <br />
                Persons in future we want to be <br />
                This is a clear reality <br />
            </Paragraph>
            <Paragraph>
                With Education in quality <br />
                In this place of learning we’ll <br />
                Realize, clearly <br />
            </Paragraph>
            <Paragraph bold>
                (Repeat refrain then Bridge)
            </Paragraph>
            <Paragraph bold>
                Bridge:
            </Paragraph>
            <Paragraph>
                Reaching farther, it will be <br />
                Searching harder, you will see <br />
                Aiming higher, we will be… <br />
                Soaring high <br />
                So high <br />
            </Paragraph>
            <Paragraph>
                Witnessing to the word anew <br />
                At Divine Word College <br />
                Our dreams come true(2x) <br />
                At Divine Word College… <br />
                Our Dreams do come true… <br />
            </Paragraph>
        </BaseWithBannerAndOverview>
    )
}

export default TheJingle
