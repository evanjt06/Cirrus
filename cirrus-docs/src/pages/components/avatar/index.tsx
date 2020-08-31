import React from 'react';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { toc } from './toc';
import { CodeBlock } from '../../../layouts/components/codeblock';

export const AvatarPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <div>
                <section className="padtop" id="avatars">
                    <div className="content">
                        <Headline title="Avatars" link="#avatars" />
                        <div className="divider"></div>

                        <p>
                            The <code>avatar</code> class is a great way to display images as part of other components.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="images">
                    <div className="content">
                        <Headline title="Avatars With Images" link="#images" size="4" />
                        <div className="divider"></div>

                        <p>The typical way to use avatars is to embed an image within them.</p>
                        <div className="row mb-2">
                            <div className="avatar">
                                <img
                                    src="https://pickaface.net/gallery/avatar/unr_jeroen_200821_1825_36edp.png"
                                    alt="avatar"
                                />
                            </div>
                            <div className="avatar">
                                <img
                                    src="https://pickaface.net/gallery/avatar/unr_alla_200821_1831_vlmqx.png"
                                    alt="avatar"
                                />
                            </div>
                            <div className="avatar">
                                <img
                                    src="https://pickaface.net/gallery/avatar/unr_moly_200823_1016_w9c78.png"
                                    alt="avatar"
                                />
                            </div>
                            <div className="avatar">
                                <img
                                    src="https://pickaface.net/gallery/avatar/unr_dione_200821_1821_vvz43.png"
                                    alt="avatar"
                                />
                            </div>
                            <div className="avatar">
                                <img
                                    src="https://pickaface.net/gallery/avatar/unr_jeroen_200821_1818_bj17.png"
                                    alt="avatar"
                                />
                            </div>
                        </div>

                        <CodeBlock
                            code={`<div className="avatar"><img src="..." alt="avatar"></div>
<div className="avatar"><img src="..." alt="avatar"></div>
<div className="avatar"><img src="..." alt="avatar"></div>
<div className="avatar"><img src="..." alt="avatar"></div>
<div className="avatar"><img src="..." alt="avatar"></div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="text">
                    <div className="content">
                        <Headline title="Avatars With Text" link="#text" size="4" />
                        <div className="divider"></div>

                        <p>
                            Alternatively, you can specify text to be displayed inside the avatar itself. This is
                            similar to what you see in Gmail.
                        </p>
                        <div className="row mb-2">
                            <div className="avatar" data-text="Aa"></div>
                            <div className="avatar" data-text="Bb"></div>
                            <div className="avatar" data-text="Cc"></div>
                        </div>

                        <CodeBlock
                            code={`<div className="avatar" data-text='Aa'></div>
<div className="avatar" data-text='Bb'></div>
<div className="avatar" data-text='Cc'></div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="sizes">
                    <div className="content">
                        <Headline title="Avatars Sizes" link="#sizes" size="4" />
                        <div className="divider"></div>
                        <p>
                            As with many other components in Cirrus, <code>avatar</code> comes with 4 other size
                            modifiers including <code>avatar--xsmall</code>, <code>avatar--small</code>,{' '}
                            <code>avatar--large</code>, and <code>avatar--xlarge</code>.
                        </p>
                        <p>
                            The example below shows how <code>avatars</code> can be used with <code>tiles</code>.
                        </p>

                        <div className="row mb-3">
                            <div className="col-6">
                                <div className="tile m-0 level">
                                    <div className="tile__icon">
                                        <figure className="avatar avatar--xsmall" data-text="Jz"></figure>
                                    </div>
                                    <div className="tile__container">
                                        <p className="tile__title m-0">Jenelle Zaynab</p>
                                        <p className="tile__subtitle m-0">
                                            <a href="#/">@jenelle_zaynab</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="space"></div>

                                <div className="tile m-0 level">
                                    <div className="tile__icon">
                                        <figure
                                            className="avatar avatar--small"
                                            data-text="Jz"
                                            style={{ background: '#a3d39c' }}
                                        ></figure>
                                    </div>
                                    <div className="tile__container">
                                        <p className="tile__title m-0">Jenelle Zaynab</p>
                                        <p className="tile__subtitle m-0">
                                            <a href="!#">@jenelle_zaynab</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="space"></div>

                                <div className="tile m-0 level">
                                    <div className="tile__icon">
                                        <figure
                                            className="avatar"
                                            data-text="Jz"
                                            style={{ background: '#7accc8' }}
                                        ></figure>
                                    </div>
                                    <div className="tile__container">
                                        <p className="tile__title m-0">Jenelle Zaynab</p>
                                        <p className="tile__subtitle m-0">
                                            <a href="!#">@jenelle_zaynab</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="space"></div>

                                <div className="tile m-0 level">
                                    <div className="tile__icon">
                                        <figure
                                            className="avatar avatar--large"
                                            data-text="Jz"
                                            style={{ background: '#4aaaa5' }}
                                        ></figure>
                                    </div>
                                    <div className="tile__container">
                                        <p className="tile__title m-0">Jenelle Zaynab</p>
                                        <p className="tile__subtitle m-0">
                                            <a href="!#">@jenelle_zaynab</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="space"></div>

                                <div className="tile m-0 level">
                                    <div className="tile__icon">
                                        <figure
                                            className="avatar avatar--xlarge"
                                            data-text="Jz"
                                            style={{ background: '#35404f' }}
                                        ></figure>
                                    </div>
                                    <div className="tile__container">
                                        <p className="tile__title m-0">Jenelle Zaynab</p>
                                        <p className="tile__subtitle m-0">
                                            <a href="!#">@jenelle_zaynab</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="tile m-0 level">
                                    <div className="tile__icon">
                                        <figure className="avatar avatar--xsmall">
                                            <img src="https://images.unsplash.com/profile-1495427732560-fe5248ad6638?dpr=1&amp;auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=60&amp;cs=tinysrgb&amp;crop=faces&amp;bg=fff"alt="avatar" />
                                        </figure>
                                    </div>
                                    <div className="tile__container">
                                        <p className="tile__title m-0">Nathan Dumlao</p>
                                        <p className="tile__subtitle m-0">
                                            <a href="!#">@nate_dumlao</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="space"></div>

                                <div className="tile m-0 level">
                                    <div className="tile__icon">
                                        <figure className="avatar avatar--small">
                                            <img src="https://images.unsplash.com/profile-1495427732560-fe5248ad6638?dpr=1&amp;auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=60&amp;cs=tinysrgb&amp;crop=faces&amp;bg=fff"alt="avatar" />
                                        </figure>
                                    </div>
                                    <div className="tile__container">
                                        <p className="tile__title m-0">Nathan Dumlao</p>
                                        <p className="tile__subtitle m-0">
                                            <a href="!#">@nate_dumlao</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="space"></div>

                                <div className="tile m-0 level">
                                    <div className="tile__icon">
                                        <figure className="avatar">
                                            <img src="https://images.unsplash.com/profile-1495427732560-fe5248ad6638?dpr=1&amp;auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=60&amp;cs=tinysrgb&amp;crop=faces&amp;bg=fff"alt="avatar" />
                                        </figure>
                                    </div>
                                    <div className="tile__container">
                                        <p className="tile__title m-0">Nathan Dumlao</p>
                                        <p className="tile__subtitle m-0">
                                            <a href="!#">@nate_dumlao</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="space"></div>

                                <div className="tile m-0 level">
                                    <div className="tile__icon">
                                        <figure className="avatar avatar--large">
                                            <img src="https://images.unsplash.com/profile-1495427732560-fe5248ad6638?dpr=1&amp;auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=60&amp;cs=tinysrgb&amp;crop=faces&amp;bg=fff"alt="avatar" />
                                        </figure>
                                    </div>
                                    <div className="tile__container">
                                        <p className="tile__title m-0">Nathan Dumlao</p>
                                        <p className="tile__subtitle m-0">
                                            <a href="!#">@nate_dumlao</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="space"></div>

                                <div className="tile m-0 level">
                                    <div className="tile__icon">
                                        <figure className="avatar avatar--xlarge">
                                            <img src="https://images.unsplash.com/profile-1495427732560-fe5248ad6638?dpr=1&amp;auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=60&amp;cs=tinysrgb&amp;crop=faces&amp;bg=fff"alt="avatar" />
                                        </figure>
                                    </div>
                                    <div className="tile__container">
                                        <p className="tile__title m-0">Nathan Dumlao</p>
                                        <p className="tile__subtitle m-0">
                                            <a href="!#">@nate_dumlao</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <CodeBlock
                            code={`<div class="row">
    <div class="col-6">
        <div class="tile m-0 level">
            <div class="tile__icon">
                <figure class="avatar avatar--xsmall" data-text="Jz"></figure>
            </div>
            <div class="tile__container">
                <p class="tile__title m-0">Jenelle Zaynab</p>
                <p class="tile__subtitle m-0"><a href="!#">@jenelle_zaynab</a></p>
            </div>
        </div>
        <div class="space"></div>
        <div class="tile m-0 level">
            <div class="tile__icon">
                <figure class="avatar avatar--small" data-text="Jz" style="background: rgb(163, 211, 156);"></figure>
            </div>
            <div class="tile__container">
                <p class="tile__title m-0">Jenelle Zaynab</p>
                <p class="tile__subtitle m-0"><a href="!#">@jenelle_zaynab</a></p>
            </div>
        </div>
        <div class="space"></div>
        <div class="tile m-0 level">
            <div class="tile__icon">
                <figure class="avatar" data-text="Jz" style="background: rgb(122, 204, 200);"></figure>
            </div>
            <div class="tile__container">
                <p class="tile__title m-0">Jenelle Zaynab</p>
                <p class="tile__subtitle m-0"><a href="!#">@jenelle_zaynab</a></p>
            </div>
        </div>
        <div class="space"></div>
        <div class="tile m-0 level">
            <div class="tile__icon">
                <figure class="avatar avatar--large" data-text="Jz" style="background: rgb(74, 170, 165);"></figure>
            </div>
            <div class="tile__container">
                <p class="tile__title m-0">Jenelle Zaynab</p>
                <p class="tile__subtitle m-0"><a href="!#">@jenelle_zaynab</a></p>
            </div>
        </div>
        <div class="space"></div>
        <div class="tile m-0 level">
            <div class="tile__icon">
                <figure class="avatar avatar--xlarge" data-text="Jz" style="background: rgb(53, 64, 79);"></figure>
            </div>
            <div class="tile__container">
                <p class="tile__title m-0">Jenelle Zaynab</p>
                <p class="tile__subtitle m-0"><a href="!#">@jenelle_zaynab</a></p>
            </div>
        </div>
    </div>
    <div class="col-6">
        <div class="tile m-0 level">
            <div class="tile__icon">
                <figure class="avatar avatar--xsmall"><img src="https://images.unsplash.com/profile-1495427732560-fe5248ad6638?dpr=1&amp;auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=60&amp;cs=tinysrgb&amp;crop=faces&amp;bg=fff"></figure>
            </div>
            <div class="tile__container">
                <p class="tile__title m-0">Nathan Dumlao</p>
                <p class="tile__subtitle m-0"><a href="!#">@nate_dumlao</a></p>
            </div>
        </div>
        <div class="space"></div>
        <div class="tile m-0 level">
            <div class="tile__icon">
                <figure class="avatar avatar--small"><img src="https://images.unsplash.com/profile-1495427732560-fe5248ad6638?dpr=1&amp;auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=60&amp;cs=tinysrgb&amp;crop=faces&amp;bg=fff"></figure>
            </div>
            <div class="tile__container">
                <p class="tile__title m-0">Nathan Dumlao</p>
                <p class="tile__subtitle m-0"><a href="!#">@nate_dumlao</a></p>
            </div>
        </div>
        <div class="space"></div>
        <div class="tile m-0 level">
            <div class="tile__icon">
                <figure class="avatar"><img src="https://images.unsplash.com/profile-1495427732560-fe5248ad6638?dpr=1&amp;auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=60&amp;cs=tinysrgb&amp;crop=faces&amp;bg=fff"></figure>
            </div>
            <div class="tile__container">
                <p class="tile__title m-0">Nathan Dumlao</p>
                <p class="tile__subtitle m-0"><a href="!#">@nate_dumlao</a></p>
            </div>
        </div>
        <div class="space"></div>
        <div class="tile m-0 level">
            <div class="tile__icon">
                <figure class="avatar avatar--large"><img src="https://images.unsplash.com/profile-1495427732560-fe5248ad6638?dpr=1&amp;auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=60&amp;cs=tinysrgb&amp;crop=faces&amp;bg=fff"></figure>
            </div>
            <div class="tile__container">
                <p class="tile__title m-0">Nathan Dumlao</p>
                <p class="tile__subtitle m-0"><a href="!#">@nate_dumlao</a></p>
            </div>
        </div>
        <div class="space"></div>
        <div class="tile m-0 level">
            <div class="tile__icon">
                <figure class="avatar avatar--xlarge"><img src="https://images.unsplash.com/profile-1495427732560-fe5248ad6638?dpr=1&amp;auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=60&amp;cs=tinysrgb&amp;crop=faces&amp;bg=fff"></figure>
            </div>
            <div class="tile__container">
                <p class="tile__title m-0">Nathan Dumlao</p>
                <p class="tile__subtitle m-0"><a href="!#">@nate_dumlao</a></p>
            </div>
        </div>
    </div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <Pagination nextLink={{ name: 'Cards', link: './cards' }} />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};
