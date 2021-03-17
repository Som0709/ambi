import React, {Component} from "react";
import ShortNotes from "./shortNotes";


const ChapterNotes = () => {
  return (
    <>
    <div class="container">
  <div class="border">
    <div class="list-group" id="myList_1" role="tablist">
      <a class="list-group-item list-group-item-action active" data-toggle="list" href="#shortNotes" role="tab">Short Notes</a>
      <a class="list-group-item list-group-item-action" data-toggle="list" href="#vedioContent" role="tab">Video Content</a>
      <a class="list-group-item list-group-item-action" data-toggle="list" href="#chapterNotes" role="tab">Chapter Notes</a>
      <a class="list-group-item list-group-item-action" data-toggle="list" href="#pdfContent" role="tab">PDF Content</a>

    </div>
    
    <div class="mt-2 tab-content">
      <div class="tab-pane active" id="shortNotes" role="tabpanel">
          <ShortNotes/>
      </div>

      <div class="tab-pane" id="vedioContent" role="tabpanel">Video Content</div>

      <div class="tab-pane" id="chapterNotes" role="tabpanel">Chapter Notes</div>

      <div class="tab-pane" id="pdfContent" role="tabpanel">PDF Content</div>

    </div>
  </div>
</div>
    </>
  )
}
export default ChapterNotes ;