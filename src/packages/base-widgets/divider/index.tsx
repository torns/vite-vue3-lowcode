import { Divider } from 'vant'
import {
  createEditorColorProp,
  createEditorSwitchProp,
  createEditorInputProp,
  createEditorSelectProp
} from '@/visual-editor/visual-editor.props'
import { VisualEditorComponent } from '@/visual-editor/visual-editor.utils'

export default {
  key: 'divider',
  moduleName: 'baseWidgets',
  label: '分割线',
  preview: () => <Divider style="width:190px">文本</Divider>,
  render: ({ props }) => {
    const style = `color:${props['text-color']};borderColor:${props['divider-color']}`
    return (
      <Divider {...props} style={style}>
        {{
          default: () => props.text
        }}
      </Divider>
    )
  },
  props: {
    text: createEditorInputProp({ label: '展示文本', defaultValue: '文本' }),
    'content-position': createEditorSelectProp({
      label: '文本位置',
      options: [
        { label: '左边', val: 'left' },
        { label: '中间', val: 'center' },
        { label: '右边', val: 'right' }
      ],
      defaultValue: 'center'
    }),
    dashed: createEditorSwitchProp({ label: '是否为虚线' }),
    'text-color': createEditorColorProp('文本颜色'),
    'divider-color': createEditorColorProp('分割线颜色')
  }
} as VisualEditorComponent
