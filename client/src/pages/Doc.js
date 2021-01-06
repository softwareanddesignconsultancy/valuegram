import React from 'react';
import Button from '@material-ui/core/Button';
import SwaggerEditor, {plugins} from 'swagger-editor';
import 'swagger-editor/dist/swagger-editor.css';


class Doc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.saveContent = this.saveContent.bind(this);
  }

  componentDidMount() {
    window.editor = SwaggerEditor({
      dom_id: '#swagger-editor',
      layout: 'EditorLayout',
      plugins: Object.values(plugins),
      swagger2GeneratorUrl: 'http://localhost:8080',
      oas3GeneratorUrl: 'http://localhost:8080',
      swagger2ConverterUrl: 'http://localhost:8080',
  });
  }

  saveContent() {
    const content = window.localStorage.getItem('swagger-editor-content');
    console.log(content);
  }

  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.saveContent}>
          Save Content
        </Button>
        <div id='swagger-editor'></div>
      </div>
    );
  }
}

export default Doc;
