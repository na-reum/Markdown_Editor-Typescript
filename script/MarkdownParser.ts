// 사용자가 만들 수 있는 태그 목록
enum TagType {
  Paragraph,
  Header1,
  Header2,
  Header3,
  HorizontalRule,
}

// 태그와 HTML 태그를 연결하는 역할
class TagTypeToHtml {
  private readonly tagType: Map<TagType, string> = new Map<TagType, string>();
  constructor() {
    this.tagType.set(TagType.Header1, "h1");
    this.tagType.set(TagType.Header2, "h2");
    this.tagType.set(TagType.Header3, "h3");
    this.tagType.set(TagType.Paragraph, "p");
    this.tagType.set(TagType.HorizontalRule, "hr");
  }
  public OpeningTag(tagType: TagType): string {
    return this.GetTag(tagType, `<`);
  }

  public ClosingTag(tagType: TagType): string {
    return this.GetTag(tagType, `</`);
  }
  //
  private GetTag(tagType: TagType, openingTagPattern: string): string {
    const tag = this.tagType.get(tagType);
    if (tag !== null) {
      return `${openingTagPattern}${tag}>`;
    }
    return `${openingTagPattern}p>`;
  }
}

class HtmlHandler {
  public TextChangeHandler(id: string, output: string): void {
    const markdown = <HTMLTextAreaElement>document.getElementById(id);
    const markdownOutput = <HTMLLabelElement>document.getElementById(output);
    if (markdown !== null) {
      markdown.onkeyup = (e) => {
        if (markdown.value) {
          markdownOutput.innerHTML = markdown.value;
        } else {
          markdownOutput.innerHTML = "<p></p>";
        }
      };
    }
  }
}
