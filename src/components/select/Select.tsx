import React from "react"
import './Select.scss'

const constants = {
    CLOSED: 'CLOSED',
    OPENED: 'OPENED',
  }
  
  const items = [
    {
      children: [
        {
          children: [
            {
              id: 6,
              name: 'Green',
            },
            {
              id: 7,
              name: 'Blue',
            },
            {
              children: [
                {
                  id: 9,
                  name: 'The push() method adds new items to the end of an array, and returns the new length.',
                },
                {
                  id: 10,
                  name: 'Hot',
                },
                {
                  id: 11,
                  name: 'Cold',
                },
              ],
              id: 8,
              name: 'Red',
            },
          ],
          id: 3,
          name: 'Moscow',
        },
        {
          id: 4,
          name: 'New York',
        },
        {
          id: 5,
          name: 'Paris',
        },
      ],
      id: 1,
      name: 'Accounting',
    },
    {
      id: 2,
      name: 'Management',
    }
  ]
  
  class CustomSelect extends React.Component<Props> {
    constructor(props: Props) {
      super(props)
      const { multiple, selectedIds } = props
      this.prepareItems()
  
      this.state = {
        popupState: constants.CLOSED,
        searchedText: undefined,
        selectedIds: multiple ? selectedIds : [selectedIds[0]].filter((x) => x),
      }
    }
  
    /**
     * Add item to flatten menu items
     */
    addItem = ({ name }: { name: string}) => {
      const ids = this.itemsFlattenSource.filter((x) => x).map((item) => item.item.id)
      const id = Math.max(...ids) + 1
      items.push({
        id,
        name,
      })
      this.toggleItem({ id })
      this.prepareItems()
    }
  
    /**
     * Render first tag as editor component which can edit a search text for filter items or add a tag,
     * if this.props.creatable === true
     */
    editorTag = ({ itemsEmpty }) => {
      const { creatable } = this.props
      const { searchedText } = this.state
      return (
        <span
          className={[
            "custom-select--head-text--editor-tag",
            `${creatable && itemsEmpty ? "custom-select--head-text--editor-tag--empty-list" : ""}`,
          ].filter((x) => x).join(" ")}
        >
          <input
            defaultValue={searchedText}
            onChange={this.searchByText}
            type="text"
          />
          <span
            className={[
              `custom-select--head-text--editor-tag${creatable && itemsEmpty ? "--empty-list" : ""}--control-button`,
            ].join(" ")}
            onClick={() => this.addItem({ name: searchedText })}
          />
        </span>
      )
    }
  
    /**
     * Implement non recursive selecting from recursive tree items
     * @param {Number} id - item id
     * @param {Array} items - array of items
     */
    getDeep = ({ id, items }) => {
      let selectedItem, selectedLevel
      this.traverseDeep({
        callback: ({ item, level }) => {
          if (item.id === id) {
            selectedItem = item
            selectedLevel = level
          }
        },
        items,
      })
      return { selectedItem, selectedLevel }
    }
  
    /**
     * Highlight text to react element
     * @param {RegExp} regexp - regular expression to highlight
     * @param {String} text - text to highlight
     * @returns {React.element}
     */
    highlightText = ({ regexp, text }) => {
      const matchedText = (text.match(regexp) || [])[0]
      if (!matchedText) {
        return text
      }
      const items = text.split(regexp)
      return items.map((item, index) => {
        return (
          <React.Fragment key={`item--${index}`}>
            {item}
            {
              index < items.length - 1 && (
                <strong>{matchedText}</strong>
              )
            }
          </React.Fragment>
        )
      })
    }
  
    /**
     * Render array of selected items as tags
     * @param {Array} ids - id of selected items
     * @param {Bool} itemsEmpty - check if no items to select
     */
    mapSelectedItems = ({ ids, itemsEmpty }) => {
      const { itemsFlattenSource } = this
      const { multiple, placeholder, searchable } = this.props
      return (
        <React.Fragment>
          {searchable && this.editorTag({ itemsEmpty })}
          {
            !ids.length && (
              <span
                className="custom-select--head-text--placeholder"
              >
                {placeholder}
              </span>
            )
          }
          {
            (multiple ? ids : [ids[0]].filter((x) => x)).map((id) => {
              const item = itemsFlattenSource.find((item) => {
                return item.item.id === id
              })
              if (!item) {
                return null
              }
              const { item: selectedItem, level: selectedLevel } = item
              return (
                <span
                  className="custom-select--head-text--selected-tag"
                  key={`selectedTag--${id}`}
                >
                  ({selectedLevel}) - {selectedItem.name}
                  <span
                    className="custom-select--head-text--selected-tag--close-btn"
                    onClick={(event) => this.toggleItem({ event, id })}
                  >
                    X
                  </span>
                </span>
              )
            })
          }
        </React.Fragment>
      )
    }
  
    /**
     * Filter menu items by searched text
     * @returns {Array}
     */
    prepareItems = () => {
      this.itemsFlattenSource = this.toFlatten({ items })
    }
  
    /**
     * Repeats symbol count times
     * @param {Number} count - count of repeats
     * @param {String} symbol - symbol
     * @return {String}
     */
    repeat = ({ count, symbol = '-' }) => {
      return Array(count + 1).join(symbol)
    }
  
    /**
     * set searchedText value in state
     * @param {Event} event - event of text imput
     */
    searchByText = (event) => {
      const { OPENED } = constants
      const { value: searchedText } = event.target
      const newStateData = {
        searchedText,
      }
      if (this.state.popupState != OPENED) {
        newStateData.popupState = OPENED
      }
      this.setState(newStateData)
      this.prepareItems()
    }
  
    /**
     * Convert array of recursive tree of menu elements to flatten array
     * @param {Array} items - recursive tree of menu items
     */
    toFlatten = ({ items }) => {
      const itemsFlatten = []
      this.traverseDeep({
        callback: ({ item, level }) => {
          itemsFlatten.push({ item: { id: item.id, name: item.name }, level })
        },
        items,
      })
      return itemsFlatten
    }
  
    /**
     * Adds value to array if it not exists yet or remove if value includes to array
     * @param {Array} array - array
     * @param {String} value - toggled value
     * @returns {Array}
     */
    toggleArrayValue = ({ array, value }) => {
      const elementIndex = array.findIndex((element) => {
        return element === value
      })
      if (elementIndex >= 0) {
        array.splice(elementIndex, 1)
      } else {
        array.push(value)
      }
      return array
    }

    /**
     * toggle option to selected or not selected
     */
    toggleItem = ({ event = undefined, id }) => {
      if (event) {
        event.stopPropagation()
      }
      const { multiple } = this.props
      let { selectedIds } = this.state
      if (multiple) {
        selectedIds = this.toggleArrayValue({
          array: selectedIds,
          value: id,
        })
      } else if (selectedIds.includes(id)) {
        selectedIds = []
      } else {
        selectedIds = [id]
      }
      const { CLOSED } = constants
      this.setState({
        popupState: CLOSED,
        selectedIds,
      })
    }
  
    /**
     * Open / close select menu popup
     */
    togglePopup = () => {
      const { popupState } = this.state
      const { CLOSED, OPENED } = constants
      this.setState({ popupState: popupState === OPENED ? CLOSED : OPENED })
    }
  
    /**
     * Non-recurcive iteration over recursive tree of array elements
     * @param {Function} callback - callback for each item
     * @param {Array} items - recursive tree of menu items
     */
    traverseDeep = ({ callback, items }) => {
      const stack = items.map((item) => {
        return { item, level: 0 }
      })
  
      while (stack.length) {
        const { item, level } = stack[0]
        const { children } = item
        if (item.id && item.name) {
          callback({ item, level })
        }
        if (children) {
          const nextLevelItems = item.children.map((nextLevelItem) => {
            return { item: nextLevelItem, level: level + 1 }
          }) || []
          stack.splice(1, 0, ...nextLevelItems)
        }
        stack.shift()
      }
      return undefined
    }
  
    render() {
      const { popupState, searchedText, selectedIds } = this.state
      const { multiple, taggable } = this.props
      const { itemsFlattenSource } = this
      const regexp = new RegExp(searchedText, 'i')
      const itemsEmpty = !itemsFlattenSource.filter((item) => regexp.test(item.item.name)).length
  
      return (
        <div>
          {
            selectedIds.length ? (
              <div>ids: {selectedIds.join(', ')}</div>
            ) : (
              <div>Nothing selected</div>
            )
          }
          <div
            className={[
              "custom-select",
              !multiple && !taggable && "custom-select--non-tagged",
            ].filter((x) => x).join(" ")}
          >
            <div
              className={[
                "custom-select--head",
                `custom-select--head-${popupState.toLowerCase()}`
              ].join(" ")}
              onClick={this.togglePopup}
            >
              <div className="custom-select--head-text">
                {this.mapSelectedItems({ ids: selectedIds, itemsEmpty })}
              </div>
            </div>
          </div>
          <div
            className={[
              "custom-select--popup",
              `custom-select--popup-${popupState.toLowerCase()}`,
            ].join(" ")}
          >
            {
              itemsFlattenSource.map(({ item, level }, index) => {
                if (searchedText) {
                  if (!regexp.test(item.name)) {
                    return null
                  }
                }
  
                return (
                  <div
                    className={[
                      "custom-select--popup-option",
                      selectedIds.includes(item.id) ? "custom-select--popup-option-selected" : "",
                    ].join(" ")}
                    key={`option_${index}`}
                    onClick={() => this.toggleItem({ id: item.id })}
                  >
                    {this.repeat({ count: level + 2 })}&nbsp;
                    {
                      searchedText ? this.highlightText({ regexp, text: item.name }) : (
                        <span>{item.name}</span>
                      )
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    }
  }
  
   type Props = {
       creatable: boolean,    
    items: {
      children: any,
      id: number,
      name: string,
    },                             
    multiple: boolean,     
    placeholder: string,  
    searchable: boolean,   
    selectedIds: number[],  
    taggable: boolean
  }
  
 export default CustomSelect
  