import { Layout } from "../../components/templates/Layout"
import layout from "../../styles/style.module.css"
import utilStyles from "../../styles/utils.module.css"
import List from "../../components/organisms/layout/List"

export default function Movies() {
    return (
        <div>
            <Layout>
                <div className={layout.container}>
                    <h1 className={utilStyles.text}>作品一覧</h1>
                    <div className={layout.moviesSearch}>
                        <div className={layout.selectArea}>
                            <div className={layout.selectItems}>
                                <div className={layout.selectTitle}>作品選択</div>
                                <div className={layout.selectInner}>
                                    <select>
                                    <option value="1">上映中作品</option>
                                    <option value="2">上映予定作品</option>
                                    </select>
                                </div>
                            </div>
                            <div className={layout.selectItems}>
                                <div className={layout.selectTitle}>劇場選択</div>
                                <div className={layout.selectInner}>
                                    <select>
                                    <option value="1">全ての劇場</option>
                                    <option value="2">シネマライカム</option>
                                    <option value="3">サザンプレックス</option>
                                    <option value="4">シネマパレット</option>
                                    <option value="5">シネマプラザハウス</option>
                                    <option value="6">シネマQ</option>
                                    <option value="7">ミハマ7プレックス</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={layout.checkBox}>
                            <div className={layout.titleArea}>
                                <div className={layout.title}>ジャンル</div>
                            </div>
                            <div className={layout.checkWrap}>
                                <div className={layout.checkItem}>
                                    <input type="checkbox" name="genre" value="1" />
                                    <label>全て</label>
                                </div>
                                <div className={layout.checkItem}>
                                    <input type="checkbox" name="genre" value="2" />
                                    <label>アクション</label>
                                </div>
                                <div className={layout.checkItem}>
                                    <input type="checkbox" name="genre" value="3" />
                                    <label>SF/ファンタジー</label>
                                </div>
                                <div className={layout.checkItem}>
                                    <input type="checkbox" name="genre" value="4" />
                                    <label>サスペンス/ミステリー</label>
                                </div>
                                <div className={layout.checkItem}>
                                    <input type="checkbox" name="genre" value="5" />
                                    <label>ホラー</label>
                                </div>
                                <div className={layout.checkItem}>
                                    <input type="checkbox" name="genre" value="6" />
                                    <label>ドラマ/感動/歴史</label>
                                </div>
                                <div className={layout.checkItem}>
                                    <input type="checkbox" name="genre" value="7" />
                                    <label>ラブ/青春</label>
                                </div>
                                <div className={layout.checkItem}>
                                    <input type="checkbox" name="genre" value="8" />
                                    <label>コメディ</label>
                                </div>
                                <div className={layout.checkItem}>
                                    <input type="checkbox" name="genre" value="9" />
                                    <label>アニメ</label>
                                </div>
                                <div className={layout.checkItem}>
                                    <input type="checkbox" name="genre" value="10" />
                                    <label>ドキュメンタリー</label>
                                </div>
                                <div className={layout.checkItem}>
                                    <input type="checkbox" name="genre" value="11" />
                                    <label>キッズ/ファミリー</label>
                                </div>
                            </div>
                        </div>              
                    </div>
                    <div className={layout.movieBox}>
                        <List />
                    </div>  
                </div>
            </Layout>
        </div>
    );
}