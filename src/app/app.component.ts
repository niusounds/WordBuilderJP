import { Component } from '@angular/core';

const translationTable = {
  あ: 'a', い: 'E', う: 'U', え: 'e', お: 'o',
  か: 'Ka', き: 'KE', く: 'KU', け: 'Ke', こ: 'Ko',
  さ: 'Sa', し: 'S!E', す: 'SU', せ: 'Se', そ: 'So',
  た: 'Ta', ち: 'C!E', つ: 'T!U', て: 'Te', と: 'To',
  な: 'na', に: 'nE', ぬ: 'nU', ね: 'ne', の: 'no',
  は: 'ha', ひ: 'hE', ふ: 'hU', へ: 'he', ほ: 'ho',
  ま: 'ma', み: 'mE', む: 'mU', め: 'me', も: 'mo',
  や: 'ya', ゆ: 'yU', よ: 'yo',
  ら: 'la', り: 'lE', る: 'lU', れ: 'le', ろ: 'lo',
  わ: 'wa', を: 'wo', ん: 'n',
  が: 'ga', ぎ: 'gE', ぐ: 'gU', げ: 'ge', ご: 'go',
  ざ: 'za', じ: 'zE', ず: 'zU', ぜ: 'ze', ぞ: 'zo',
  だ: 'da', ぢ: 'dE', づ: 'dU', で: 'de', ど: 'do',
  ば: 'ba', び: 'bE', ぶ: 'bU', べ: 'be', ぼ: 'bo',
  ぱ: 'Pa', ぴ: 'PE', ぷ: 'PU', ぺ: 'Pe', ぽ: 'Po',
  きゃ: 'Kya', きゅ: 'KyU', きょ: 'Kyo',
  しゃ: 'S!ya', しゅ: 'S!yU', しょ: 'S!yo',
  ちゃ: 'C!ya', ちゅ: 'C!yU', ちょ: 'C!yo',
  にゃ: 'nya', にゅ: 'nyU', にょ: 'nyo',
  ひゃ: 'hya', ひゅ: 'hyU', ひょ: 'hyo',
  みゃ: 'mya', みゅ: 'myU', みょ: 'myo',
  りゃ: 'lya', りゅ: 'lyU', りょ: 'lyo',
  ぎゃ: 'gya', ぎゅ: 'gyU', ぎょ: 'gyo',
  じゃ: 'zya', じゅ: 'zyU', じょ: 'zyo',
  びゃ: 'bya', びゅ: 'byU', びょ: 'byo',
  ぴゃ: 'Pya', ぴゅ: 'PyU', ぴょ: 'Pyo',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lyrics: string = 'こんにちわ';
  copied: boolean = false;

  /**
   * ひらがな→WB文字列の変換をする
   * @param {String} rowLyric
   */
  translate(rowLyric: string): string {
    let lyric = this.normalize(rowLyric);
    let words: string[] = [];

    for (let i = 0; i < lyric.length; i++) {
      let word: string

      // もし後ろに文字があり、ゃゅょのどれかだった場合
      if (lyric[i + 1] && /[ゃゅょ]/.test(lyric[i + 1])) {
        word = translationTable[lyric.substr(i, 2)];
        i++;
      } else {
        word = translationTable[lyric[i]];
      }

      // 変換に成功していれば結果を出力配列に追加
      if (word) {
        words.push(word);
      }
    }

    return words.join(' ');
  }

  /**
   * 空白を除去する
   */
  normalize(lyric: string): string {
    return lyric.replace(/\s/g, '');
  }

  copy() {
    navigator.clipboard.writeText(this.translate(this.lyrics));
    this.copied = true;
  }
}